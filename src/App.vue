<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Mp4Page from './views/Mp4Test.vue'


export default {
  components: {
    Mp4Page
  },
  setup() {

  },
  name: 'App',
  data() {
    return {



      context: JSON.parse(localStorage.getItem("context")) || "本地数据为空：\n  https://s-bj-2339-mydisk1.oss.dogecdn.com/%E3%81%82%E3%81%AE%E3%81%AF%E3%81%AA.mp4,\n https://s-bj-2339-mydisk1.oss.dogecdn.com/test/TE.m3u8 ,\n https://s-bj-2339-mydisk1.oss.dogecdn.com/movie/yrcy_m3u8/YRCY_m3u8.m3u8",

    }
  },
  methods: {

    datatoContext(value) {
      localStorage.setItem('context', JSON.stringify(value))
      alert("保存成功")
    }

  },
  watch: {
    // context(value){ localStorage.setItem('context',JSON.stringify(value)) }
  }
}

</script>

<template>
  <div id="app">


          <!-- <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink> -->

    <!-- <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>

        </nav>
      </div>
    </header> -->

    <main>

      <header>
        <h1>👺</h1>
        <img src="https://avatars.githubusercontent.com/u/51418619?v=4" alt="">
      </header>

      <main>
        <h1>简易视频播放器</h1>
        <p>
          <textarea cols="85" rows="30" v-model="context"></textarea>
        </p>
        <p>
          <button @click="datatoContext(context)"> 保存文字区，到 localStorge </button>
        </p>


        <Mp4Page></Mp4Page>


      </main>


      <footer>
        <h1>🥥</h1>
      </footer>
    </main>

    <!-- <RouterView /> -->
  </div>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
