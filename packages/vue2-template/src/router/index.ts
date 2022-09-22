import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [{ path: '/', component: () => import('../pages/home/home.vue') }]

const router = new VueRouter({
  mode: 'hash',
  routes,
})
export default router
