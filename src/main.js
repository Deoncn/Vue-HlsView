import { createApp } from 'vue'
import { router } from './router'


import App from './App.vue'

 // 引入css+js
import vue3videoPlay from 'vue3-video-play'
import 'vue3-video-play/dist/style.css'

const app = createApp(App).use(router).use(vue3videoPlay)

app.mount('#app')
