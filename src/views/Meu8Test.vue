<template>
  <div align="center">
    <p><input type="text" v-model="options.newsrc">
      <button @click="getnewsrc">获取</button>
      <button @click="changesrc">应用</button>
    </p>
      <vue3VideoPlay width="800px" v-bind="options" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const options = reactive({
    width: '800px', //播放器高度
    height: '450px', //播放器高度
    color: "#409eff", //主题色
    title: '', //视频名称
    type:'m3u8',//视频类型
    src: 'https://s-bj-2339-mydisk1.oss.dogecdn.com/movie/yrcy_m3u8/YRCY_m3u8.m3u8', //视频源
    newsrc: '',
    muted: false, //静音
    webFullScreen: false,
    speedRate: [ "1.0", "1.25"], //播放倍速
    autoPlay: false, //自动播放
    loop: false, //循环播放
    mirror: false, //镜像画面
    ligthOff: false,  //关灯模式
    volume: 0.3, //默认音量大小
    control: true, //是否显示控制
    controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
})


function getnewsrc() {
  console.log(options.newsrc)
}

function changesrc() {
  console.log("目标", options.src)
  options.src = options.newsrc
  console.log("目标", options.src)
}
</script>
  
<style scoped>

</style>
  
  