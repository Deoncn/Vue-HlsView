// isPlayableVideoUrl.ts
type DetectResult =
    | { ok: true; kind: 'file' | 'hls' | 'dash'; reason: string }
    | { ok: false; reason: string };

const EXT_MAP: Record<string, { kind: 'file' | 'hls' | 'dash'; mimeHints: string[] }> = {
    '.mp4':  { kind: 'file', mimeHints: ['video/mp4'] },
    '.m4v':  { kind: 'file', mimeHints: ['video/mp4'] },
    '.mov':  { kind: 'file', mimeHints: ['video/quicktime', 'video/mp4'] },
    '.webm': { kind: 'file', mimeHints: ['video/webm'] },
    '.ogv':  { kind: 'file', mimeHints: ['video/ogg'] },
    '.ts':   { kind: 'file', mimeHints: ['video/mp2t'] },
    '.mkv':  { kind: 'file', mimeHints: ['video/x-matroska', 'video/webm'] }, // 浏览器支持有限
    '.m3u8': { kind: 'hls',  mimeHints: ['application/vnd.apple.mpegurl', 'application/x-mpegURL'] },
    '.mpd':  { kind: 'dash', mimeHints: ['application/dash+xml'] },
};

function normalizeUrl(input: string): URL | null {
    try {
        // 允许带空格、大小写、杂项参数（sign 等）
        return new URL(input.trim());
    } catch {
        return null;
    }
}

function getLowerExt(u: URL): string {
    const pathname = u.pathname.toLowerCase();
    const q = pathname.split('?')[0];
    const lastDot = q.lastIndexOf('.');
    return lastDot >= 0 ? q.slice(lastDot) : '';
}

function likelyHtmlPage(u: URL): boolean {
    // 常见“不是直链”的域或路径特征（如 YouTube/Bilibili 播放页）
    const host = u.hostname.toLowerCase();
    const path = u.pathname.toLowerCase();
    if (host.includes('youtube.com') || host.includes('youtu.be')) return true;
    if (host.includes('bilibili.com') && (path.includes('/video/') || path.includes('/bangumi/'))) return true;
    if (host.includes('vimeo.com') && !path.endsWith('.mp4')) return true;
    // 还可按业务补充平台域名特征
    return false;
}

function canBrowserPlayByMimeHint(mimeHints: string[]): boolean {
    const v = document.createElement('video');
    return mimeHints.some((m) => !!v.canPlayType(m));
}

/**
 * 尝试用 <video> 真实加载元数据来判定（最可靠）。
 * - 对文件直链：直接设 src。
 * - 对 m3u8：若浏览器原生不支持且全局有 Hls（hls.js），则走 Hls 流程。
 * - 对 mpd：需要 DASH 播放器（如 dash.js）；这里仅做简单检测，不集成库（注释给出方案）。
 */
export async function isPlayableVideoUrl(input: string, options?: {
    timeoutMs?: number;
    useHlsJsIfAvailable?: boolean; // 若引入了 hls.js (window.Hls)，可设置 true
}): Promise<DetectResult> {
    const timeoutMs = options?.timeoutMs ?? 10000;
    const useHlsJsIfAvailable = options?.useHlsJsIfAvailable ?? true;

    const u = normalizeUrl(input);
    if (!u) return { ok: false, reason: 'URL 无效' };

    if (likelyHtmlPage(u)) {
        return { ok: false, reason: '看起来是网页播放页（非媒体直链）' };
    }

    const ext = getLowerExt(u);
    const extInfo = EXT_MAP[ext];

    // 1) 静态快速判断
    if (extInfo) {
        // 对浏览器是否“可能”支持做个初筛
        if (extInfo.kind === 'file' && !canBrowserPlayByMimeHint(extInfo.mimeHints)) {
            // 仍先进入动态验证，因为某些容器/码流浏览器也能播
            // 不直接判死
        }
    }

    // 2) 动态可靠判定
    // 用 <video> preload=metadata 尝试加载；若 loadedmetadata 则可播
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true; // 避免自动播放限制影响元数据加载

    const asPromise = () =>
        new Promise<DetectResult>((resolve) => {
            const timer = window.setTimeout(() => {
                cleanup();
                resolve({ ok: false, reason: '加载超时，可能不是可播放直链或被 CORS/鉴权拦截' });
            }, timeoutMs);

            const finalize = (res: DetectResult) => {
                window.clearTimeout(timer);
                cleanup();
                resolve(res);
            };

            function cleanup() {
                video.src = '';
                video.remove();
            }

            video.addEventListener('loadedmetadata', () => {
                if (extInfo?.kind === 'hls') return finalize({ ok: true, kind: 'hls', reason: 'HLS 元数据已加载' });
                if (extInfo?.kind === 'dash') return finalize({ ok: true, kind: 'dash', reason: 'DASH 元数据已加载' });
                finalize({ ok: true, kind: 'file', reason: '视频元数据已加载' });
            });

            video.addEventListener('error', () => {
                // 对 HLS：部分浏览器需要 hls.js；如果可用则尝试
                if (extInfo?.kind === 'hls' && useHlsJsIfAvailable && (window as any).Hls?.isSupported?.()) {
                    try {
                        const Hls = (window as any).Hls;
                        const hls = new Hls();
                        hls.on(Hls.Events.MANIFEST_PARSED, () => {
                            hls.destroy();
                            finalize({ ok: true, kind: 'hls', reason: 'hls.js 成功解析清单' });
                        });
                        hls.on(Hls.Events.ERROR, () => {
                            hls.destroy();
                            finalize({ ok: false, reason: 'hls.js 解析失败，可能不是有效的 m3u8' });
                        });
                        hls.loadSource(u.toString());
                        hls.attachMedia(video);
                        return; // 把结果交给 hls.js 回调
                    } catch {
                        // 兜底：仍然判失败
                    }
                }

                // 对 DASH：若项目里集成了 dash.js，可在此接入（示例注释）
                // if (extInfo?.kind === 'dash' && (window as any).dashjs) {
                //   const dashjs = (window as any).dashjs;
                //   const player = dashjs.MediaPlayer().create();
                //   player.on('manifestLoaded', () => {
                //     player.reset();
                //     finalize({ ok: true, kind: 'dash', reason: 'dash.js 成功解析清单' });
                //   });
                //   player.on('error', () => {
                //     player.reset();
                //     finalize({ ok: false, reason: 'dash.js 解析失败，可能不是有效的 mpd' });
                //   });
                //   player.initialize(video, u.toString(), false);
                //   return;
                // }

                // 其他情况：直接失败
                finalize({ ok: false, reason: '无法加载为媒体资源（网络错误、CORS、鉴权或非媒体）' });
            });

            // 关键：直接尝试媒体加载（HEAD 在前端常被 CORS 拒绝，video 更实际）
            video.src = u.toString();
            // 不调用 play()，只取元数据
            document.body.appendChild(video); // 某些浏览器在未插入 DOM 时不会启动加载
        });

    return asPromise();
}
