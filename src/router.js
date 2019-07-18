import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/Ebook'
    },
    {
      path: '/Ebook',
      name: 'Ebook',
      component: () => import('./views/ebook/ebook.vue'),
      children: [{
        path: ":filename",
        component: () => import('./components/ebook/ebookReader.vue')
      }]
    }
  ]
})
