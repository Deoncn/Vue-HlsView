<script>
import { v4 as uuidv4 } from 'uuid';
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
      inputid: null,
      inputid: 0,
      inputdescription: "",
      inputname: "",
      inputsrc: "",


      contt: 1,
      contexts: JSON.parse(localStorage.getItem("VideoList")) || [{ id: 1, name: "圣职者", src: "https://baidu.com", description: "你好！" }, { id: 2, name: "圣职者2", src: "https://baidu.com", description: "你好！" }],
      context: JSON.parse(localStorage.getItem("context")) || "本地数据为空：\n  https://s-bj-2339-mydisk1.oss.dogecdn.com/%E3%81%82%E3%81%AE%E3%81%AF%E3%81%AA.mp4,\n https://s-bj-2339-mydisk1.oss.dogecdn.com/test/TE.m3u8 ,\n https://s-bj-2339-mydisk1.oss.dogecdn.com/movie/yrcy_m3u8/YRCY_m3u8.m3u8",

    }
  },
  methods: {

    datatoContext(value) {
      localStorage.setItem('context', JSON.stringify(value))
      alert("保存成功")
    },

    datatoVideoList(value) {

      localStorage.setItem('VideoList', JSON.stringify(value))
      alert("保存成功")
    },

    toggletext() {
      this.istext = !this.istext;
    },

    addVideos(inputid, inputdescription, inputname, inputsrc) {

      const UUID = crypto.randomUUID();
      console.log("开发中.");



      // 获取输入的三个值 并组合成为对象
      const item = { id: inputid, name: inputname, src: inputsrc, description: inputdescription };
      // 检测ID 是否存在
      // No

      // 获取储存未知
      // 

      // 加入输入的数据
      this.contexts.push(item)

    },

    deletevideo(index) {
      const confirmee = confirm("确认要删除吗？")

      if (confirmee == true) {
        console.log("确认删除")
        this.contexts.splice(index, 1)
      } else {
        console.log("否")
      }

    },

    copythevideosrc(item) {
      console.log(item.src)


    }


  },
  watch: {
    // context(value) { localStorage.setItem('context', JSON.stringify(value)) },
    // context(value) { localStorage.setItem('contexts', JSON.stringify(value)) }

  }
}

</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}
</style>

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
      <div style="border: 1cm solid rebeccapurple;">

        <p>
        <p> 视频ID ：<input v-model="inputid" type="text"></p>
        <p> 视频名称 ：<input v-model="inputname" type="text"></p>
        <p> 视频路径 ：<input v-model="inputsrc" type="text" style="width:800px"></p>
        <p> 视频描述 ：<input v-model="inputdescription" type="text"></p>
        <button @click="addVideos(inputid, inputdescription, inputname, inputsrc)"> 添加 </button>
        <button @click="datatoVideoList(contexts)">保存</button>
        </p>

        <div id="no-downloads" v-if="!contt">
          <div>
            <div class="illustration"> </div>
            <span>您添加的视频会显示在此处</span>
          </div>
        </div>

        <div id="downloadsList">
          <div v-if="contt" v-for="(item, index) in contexts" :key="index">

            <div id="content" focus-row-container="" class="is-active focus-row-active">


              <div id="file-icon-wrapper" class="icon-wrapper" aria-hidden="true">
                <img class="icon" id="file-icon"
                  src="https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg">
              </div>


              <div id="details">
                <!-- 标题 -->
                <div id="title-area" role="gridcell">
                  <a is="action-link" id="file-link" focus-type="fileLink" tabindex="0" role="link"
                    @click="copythevideosrc" href="#">{{ item.name }}</a>
                  <span id="name" hidden>{{ item.name }}</span><span id="tag"></span>
                </div>

                <!-- 播放地址 -->
                <div role="gridcell">
                  <a id="url" focus-type="url" href="#" @click="copythevideosrc(item)" tabindex="0">
                    {{ item.src }}
                  </a>
                </div>


                <!-- <div id="description" role="gridcell" hidden> -->
                <!-- hidden 可用于隐藏内容 -->
                <!-- 详情描述 -->
                <div id="description" role="gridcell">
                  {{ index }} : {{ item.description }}

                </div>

              </div>

              <div class="more-options">
                <div role="gridcell">
                  <div class="icon-clear" id="remove" title="从列表中移除" focus-row-control="" focus-type="remove" style=""
                    aria-disabled="false" role="button" tabindex="0">
                    <div id="icon">
                      <button @click="deletevideo(index)">
                        <span class="material-icons">
                          close
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>



      </div>



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
