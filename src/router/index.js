import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
