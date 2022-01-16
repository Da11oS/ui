import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Layout from "@/views/Layout";
import Favorites from "@/views/Favorites";
import Bascket from "@/views/Bascket";
import Sign from "@/views/Sign";
import SignOut from "@/components/SignOut";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/',
                name: 'Catalog',
                component: Catalog,
            },
            {
                path: '/',
                name: 'Favorites',
                component: Favorites
            },
            {
                path: '/',
                name: 'Bascket',
                component: Bascket
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: '/sign',
                name: 'Sign',
                component: Sign
            },
            {
                path: '/signout',
                name: 'SignOut',
                component: SignOut
            },
        ]
    }]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
