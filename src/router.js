import { createRouter, createWebHistory } from 'vue-router'
import Meu8Test from './views/Meu8Test.vue'
import HoHome from './views/HoHome.vue'
import Mp4Test from './views/Mp4Test.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HoHome },
        { path: '/m3u8page', component: Meu8Test },
        { path: '/mp4page', component: Mp4Test },
    ],
})
