import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

app.use(createApp)
app.mount('#app')

import './assets/main.css'
import './assets/DPlayer.min.css'

