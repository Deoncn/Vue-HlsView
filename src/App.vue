<script>
import Mp4Page from './components/Mp4Test.vue'


export default {
  components: {
    Mp4Page
  },
  setup() {

  },
  name: 'App',
  data() {
    return {
      istext: false,


      context: JSON.parse(localStorage.getItem("context")) || "本地数据为空：\n  https://s-bj-2339-mydisk1.oss.dogecdn.com/%E3%81%82%E3%81%AE%E3%81%AF%E3%81%AA.mp4,\n https://s-bj-2339-mydisk1.oss.dogecdn.com/test/TE.m3u8 ,\n https://s-bj-2339-mydisk1.oss.dogecdn.com/movie/yrcy_m3u8/YRCY_m3u8.m3u8",

    }
  },
  methods: {

    datatoContext(value) {
      localStorage.setItem('context', JSON.stringify(value))
      alert("保存成功")
    },

    toggletext() {
      this.istext = !this.istext;
    },



  },
  watch: {
    // context(value){ localStorage.setItem('context',JSON.stringify(value)) }
  }
}

</script>

<template>
  <div id="app">

    <header>
      <h1>
        <img width="30" src="https://avatars.githubusercontent.com/u/51418619?v=4" alt="">
        👺🥥
        简易视频播放器
        
      </h1>


      <p> JwPlayer <a href="https://www.jwplayer.com/" target="_blank">JwPlayer</a> | <a
          href="https://github.com/jwplayer/jwplayer" target="_blank"> Github </a></p>
      <p> DPlayer <a href="https://dplayer.diygod.dev/" target="_blank"> DPlayer </a> |👉 <a
          href="https://github.com/DIYgod/DPlayer" target="_blank"> Github </a></p>
      <p> hello-muiplayer <a href="https://muiplayer.js.org/" target="_blank"> muiplayer </a> | <a
          href="https://github.com/muiplayer/hello-muiplayer" target="_blank"> muiplayer </a></p>
      <p> v-videos.js <a href="https://videojs.com/" target="_blank"> videojs </a> | <a
          href="https://github.com/videojs/video.js" target="_blank"> videojs </a></p>

      <p> v-videos.js <a href="https://codelife.cc/vue3-video-play/" target="_blank"> vue3-video-play </a> | <a
          href="https://github.com/xdlumia/vue3-video-play" target="_blank"> videojs </a></p>
    </header>



    <main>

      <p>
        <textarea v-if="istext" cols="85" rows="30" v-model="context"></textarea>
      </p>

      <p>
        <button @click="toggletext()"> 显示或隐藏文字区 </button> |
        <button @click="datatoContext(context)"> 保存(文字到 localStorge) </button>
      </p>

      <br>
      <br>

      <Mp4Page></Mp4Page>

    </main>


  </div>
</template>
