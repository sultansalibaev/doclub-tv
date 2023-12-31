import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthorizationPage from '../pages/AuthorizationPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: AuthorizationPage
    },
    {
        path: '/main',
        name: 'main',
        component: () => import(/* webpackChunkName: "about" */ '../pages/MainPage.vue')
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import(/* webpackChunkName: "about" */ '../pages/MainPage.vue') },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
