<template>
  <div align="center">
    <p><input style="width:800px" type="text" v-model="NewSrc"></p>


    <button @click="GetIt">获取</button>
    <button @click="ChangeVideo">应用</button>

    <br>
    <br>
    <br>
    <br>
    <p>

      <br>
      <vue3VideoPlay width="800px" v-bind="VideoObject" />
    </p>
  </div>
</template>

<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0,

      NewSrc: "",

      M3u8Video: {
        width: '800px', //播放器高度
        height: '450px', //播放器高度
        color: "#409eff", //主题色
        title: '', //视频名称
        type: 'm3u8',//视频类型
        src: 'https://s-bj-2339-mydisk1.oss.dogecdn.com/testvideo/test.m3u8', //视频源
        newsrc: '', //输入的地址
        muted: false, //静音
        webFullScreen: false,
        speedRate: ["1.0", "1.25"], //播放倍速
        autoPlay: false, //自动播放
        loop: false, //循环播放
        mirror: false, //镜像画面
        ligthOff: false,  //关灯模式
        volume: 0.3, //默认音量大小
        control: true, //是否显示控制
        controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
      },

      Mp4Video: {
        width: '800px', //播放器高度
        height: '450px', //播放器高度
        color: "#409eff", //主题色
        title: '', //视频名称

        src: 'https://s-bj-2339-mydisk1.oss.dogecdn.com/Im%20Nothing%20Without%20You.mp4', //视频源
        muted: false, //静音
        webFullScreen: false,
        speedRate: ["1.0", "1.25"], //播放倍速
        autoPlay: false, //自动播放
        loop: false, //循环播放
        mirror: false, //镜像画面
        ligthOff: false,  //关灯模式
        volume: 0.3, //默认音量大小
        control: true, //是否显示控制
        controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
      },

      VideoObject: {
        width: '800px', //播放器高度
        height: '450px', //播放器高度
        color: "#409eff", //主题色
        title: '', //视频名称
        src: 'https://garen.dynv6.net/002.mp4', //视频源
        muted: false, //静音
        webFullScreen: false,
        speedRate: ["1.0", "1.25"], //播放倍速
        autoPlay: false, //自动播放
        loop: false, //循环播放
        mirror: false, //镜像画面
        ligthOff: false,  //关灯模式
        volume: 0.3, //默认音量大小
        control: true, //是否显示控制
        controlBtns: ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
      }


    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.count++
    },


    GetIt() {
      console.log("干甚呢？", this.NewSrc)
    },

    ChangeVideo() {

      if ((this.NewSrc.substring(this.NewSrc.lastIndexOf(".") + 1)) == "m3u8") {


        // 把视频地址传给对象的视频地址
        this.M3u8Video.src = this.NewSrc;
        // 原对象接收新对象，实现值的赋予。
        this.VideoObject = this.M3u8Video;
        console.log("实现 M3U8 对象")
      } else if ((this.NewSrc.substring(this.NewSrc.lastIndexOf(".") + 1)) == "mp4") {


        // 把视频地址传给对象的视频地址
        this.Mp4Video.src = this.NewSrc;

        this.VideoObject = this.Mp4Video;
        console.log("MP4,MP4,MP4,MP4,MP4")

      } else {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        alert("未知后缀！！！！！")
      }

    }


  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    // console.log(`The initial count is ${this.count}.`)
    // this.VideoObject = this.M3u8Video;
  }
}

</script>