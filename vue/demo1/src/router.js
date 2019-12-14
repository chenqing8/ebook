/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:17:57
 * @LastEditTime: 2019-09-27 16:36:05
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/region',
      name: 'region',
      component: () => import('./views/region.vue'),
      meta: {
        requireLogin:true// 是否需要判断是否登录,这里是需要判断
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

