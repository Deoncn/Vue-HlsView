<template>
    <div>
        <p>
            <input style="width:500px" ref="getValue" value="HELLO" />
            <button @click="getnewsrc">获取</button>
            <button @click="changesrc">应用</button>
        </p>

        <div class="player" ref="playerRef"></div>
    </div>
</template>

<script>
import DPlayer from 'dplayer'
import { onMounted, reactive, ref } from 'vue'
// import Hls from 'hls.js'
export default {

    name: 'ComDplayer',
    setup() {

        // data
        const playerRef = ref(null)
        let getValue = ref();
        const video = reactive({
            oldsrc: 'http://vali01.cp31.ott.cibntv.net/6976D6A85FE4871F4577936A9/03000B07005F856CA95707ABE5CD56E7EEC33E-25DA-48FA-99B2-1686DA9C00F9.mp4?ccode=0512&duration=197&expire=18000&psid=a721db02fa0349505ee7d41dfbed808741346&ups_client_netip=242c7d24&ups_ts=1662611492&ups_userid=&utid=9%2BaeG%2BFS4jICAXUWoDT13fPi&vid=XNTI4NjY4MDA0&vkey=Bf8340461dac9cf155c91129a16b16722&s=cc001f06962411de83b1&eo=0&t=78d8d283f9bdb43&cug=1&fms=65fe2929d35f568c&tr=1406&le=2ada8805a85b931240e32c9dfa6602bb&ckt=1&m_onoff=0&rid=2000000041B34AC836346A4701E97674AC143FEE02000000&type=mp4hd2v2&bc=2&dre=u144&si=563&dst=1',
            newsrc: 'http://vali01.cp31.ott.cibntv.net/697797F87C437717C89D261E0/03000B07005F856CDB9398B296DC8B3E60E809-FBF7-4993-B1E0-A6A0CBF6DC55.mp4?ccode=0512&duration=197&expire=18000&psid=d84090e837d3f0c526d2ac46c2ba38bc41346&ups_client_netip=242c7d24&ups_ts=1662597482&ups_userid=&utid=9%2BaeG%2BFS4jICAXUWoDT13fPi&vid=XNTI4NjY1MDMy&vkey=B5dd75ae324271cf52625fee91612f6d4&s=cc001f06962411de83b1&eo=0&t=731fe23a916f267&cug=1&fms=5426f62e5bb07eb0&tr=1409&le=beb672c70fff18a779d7afbcad35e9d4&ckt=1&m_onoff=0&type=mp4hd2v2&bc=2&dre=u144&si=489&dst=1'
        })


        // methods
        function getnewsrc() {
            video.newsrc = getValue.value.value
            console.log("新数据", video.newsrc)
        }

        function changesrc() {
            console.log("目标", video.oldsrc)
            video.oldsrc = video.newsrc
            console.log("目标", video.oldsrc)
            dp()
        }

        // object
        const dp = () => {
            new DPlayer({
                container: playerRef.value,
                video: {
                    type: "customhls",
                    url: video.oldsrc,
                }
            })
            console.log("", dp)
        }


        // const hls = () => {
        //   new Hls({ debug: true });
        //   hls.loadSource('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
        //   hls.attachMedia(dp);
        //   hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        //     dp.muted = true;
        //     dp.play();
        //   });
        // }
        onMounted(() => { dp() })
        return { playerRef, getnewsrc, video, changesrc, getValue }
    },
    data() {
        return {
            video_src: "https://s-bj-2339-mydisk1.oss.dogecdn.com/%E3%81%82%E3%81%AE%E3%81%AF%E3%81%AA.mp4",
            new_src: "http://vali01.cp31.ott.cibntv.net/697797F87C437717C89D261E0/03000B07005F856CDB9398B296DC8B3E60E809-FBF7-4993-B1E0-A6A0CBF6DC55.mp4?ccode=0512&duration=197&expire=18000&psid=d84090e837d3f0c526d2ac46c2ba38bc41346&ups_client_netip=242c7d24&ups_ts=1662597482&ups_userid=&utid=9%2BaeG%2BFS4jICAXUWoDT13fPi&vid=XNTI4NjY1MDMy&vkey=B5dd75ae324271cf52625fee91612f6d4&s=cc001f06962411de83b1&eo=0&t=731fe23a916f267&cug=1&fms=5426f62e5bb07eb0&tr=1409&le=beb672c70fff18a779d7afbcad35e9d4&ckt=1&m_onoff=0&type=mp4hd2v2&bc=2&dre=u144&si=489&dst=1"
        }
    },
    methods: {
        changevideosrc() {
            console.log("目标", this.video_src)
            this.video_src = this.new_src
            console.log("目标", this.video_src)
        },
        getvideosrc() {
            this.new_src = this.$refs.getValue.value
            console.log("新数据", this.new_src)
        }
    }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.player {
    width: 50%;
    margin: 3px auto;
}

.video_img {
    width: 30%;
    margin: 3px auto;
}

button {
    width: 90px;
    height: 30px;
}

input {
    width: 200px;
}

.main {
    border: thin solid #2c3e50;
}
</style>