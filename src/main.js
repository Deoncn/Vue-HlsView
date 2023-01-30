import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


import './assets/main.css'

// vue3-video-play
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
app.use(vue3videoPlay)

app.mount('#app')
