import Vue from 'vue'
import VueRouter from 'vue-router'
import indexWrap from '../views/indexWrap.vue'
import searchPage from '../views/searchPage.vue'
import catelist from '../views/catelist.vue'
import detail from '../views/detail.vue'
import loginNav from '../views/loginNav.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'indexWrap',
    component: indexWrap
  },
  {
    path: '/searchPage',
    name: 'searchPage',
    component: searchPage
  },
  {
    path: '/catelist',
    name: 'catelist',
    component: catelist
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/loginNav',
    name: 'loginNav',
    component: loginNav
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = new VueRouter({
  routes
})

export default router
