import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Principal from '../views/Principal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
    path: '/principal',
    name: 'Principal',
    component: Principal
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
