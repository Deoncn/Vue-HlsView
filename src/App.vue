<script>
import DPlayerjsTest from './components/DPlayerjsTest.vue'

import './assets/main.css'
import './assets/DPlayer.min.css'



export default {
  components: { DPlayerjsTest },
  setup() { },
  name: 'App',
  data() { return { } },
}



</script>

<template>
  <div id="app">

    <header>
      <h1>
        <img width="30" src="https://avatars.githubusercontent.com/u/51418619?v=4" alt="">


        Live DPlayer


      </h1>
      <DPlayerjsTest></DPlayerjsTest>

      <p> <a href="https://dplayer.diygod.dev/guide.html" target="_blank"> DPlayer </a> | <a
          href="https://github.com/DIYgod/DPlayer" target="_blank"> Github </a></p>
    </header>

  </div>
</template>
