import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: './',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
      ]
    },
  ]
})

export default router
