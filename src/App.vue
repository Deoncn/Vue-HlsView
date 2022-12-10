<template>
  <div id="app">
    <header>
      <h1>测试用例HEADER</h1>

      
      <textarea name="" id="" cols="30" rows="10"  v-model="context">
        
      </textarea>
      <button @click="datatoContext(context)"  > 保存文字区，到 localStorge  </button>

      <p>
        <router-link to="/">Home </router-link>|
        <router-link to="/m3u8page">M3U8地址类型的视频</router-link>|
        <router-link to="/mp4page">MP4类型的视频</router-link>
      </p> 
      
    </header>

    <main>
      <router-view></router-view>
    </main>


    <footer>
      <h1> 页脚</h1>
    </footer>

  </div>

</template>

<script>

export default {
  components: {

  },
  setup() {

  },
  name: 'App',
  data() {
    return {
      name: "HELLO",
      context: JSON.parse(localStorage.getItem("context")) || "本地数据为空：\n  https://s-bj-2339-mydisk1.oss.dogecdn.com/%E3%81%82%E3%81%AE%E3%81%AF%E3%81%AA.mp4,\n https://s-bj-2339-mydisk1.oss.dogecdn.com/test/TE.m3u8 ,\n https://s-bj-2339-mydisk1.oss.dogecdn.com/movie/yrcy_m3u8/YRCY_m3u8.m3u8" ,
    }
  },
  methods: {

    datatoContext(value){
      localStorage.setItem('context',JSON.stringify(value))
      alert("保存成功")
    }

  },
  watch: {
    // context(value){ localStorage.setItem('context',JSON.stringify(value)) }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>







