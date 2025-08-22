<template>
  <link rel="stylesheet" href=""/>
  <div align="center">
    <p>  <button @click="ChangeVideo">检测链接是否可用并应用</button> <input style="width:800px" type="text" v-model="NewSrc"> </p>
    <p>
      <div id="dplayer"></div>
    </p>
  </div>
</template>

<script>
import dplayer from '../assets/+esm'
import {isPlayableVideoUrl} from '../ts/isPlayableVideoUrl'


export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      NewSrc: "",
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    initializeDplayer() {
      const dp = new dplayer({
        container: document.getElementById('dplayer'),
        video: { url: "https://kaneki.dynv6.net/d/oss/Picture/Lady%20Gaga%20-%20Applause.mp4?sign=7994f6avjrvtMvEgweiFUWB8Ojjq7Uhe75v-A8UwkIA=:0",
        },
        subtitle: {
          url: 'https://kaneki.dynv6.net/d/oss/Picture/Lady%20Gaga%20-%20Applause.vtt?sign=zQqxUK6aiT13X3IpdwgqbAzqrnitL_C0waUDevW1QxI=:0',
          type: 'webvtt',
          fontSize: '25px',
          bottom: '5%',
          color: '#e5ccff',
        },
        theme: '#4378ff',
      });
    },

    Dplayer(NewSrc) {
      const dp = new dplayer({
        container: document.getElementById('dplayer'),
        video: { url: NewSrc,
        },
        theme: '#4378ff',

      });
    },

    ChangeVideo() {

      isPlayableVideoUrl(this.NewSrc).then(res => {
        if (res.ok) {
          console.log('可播放，类型：', res.kind, res.reason);
          // 直接给 <video> 用：
          // <video src={url} controls />
          // 若 res.kind === 'hls' 且你的浏览器不原生支持，可引入 hls.js 播放

          // 把视频地址传给对象的视频地址
          this.Dplayer(this.NewSrc)

            console.log("实现 DPLAYER")

        } else {
          console.warn('不可播放：未知后缀', res.reason);
          alert('不可播放：未知后缀',res.reason);
        }
      });

    }

  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() { this.initializeDplayer() }
}

</script>