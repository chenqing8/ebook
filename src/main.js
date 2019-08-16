import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import './assets/webFont/daysOne.css'
import './assets/css/icon.css'
import SlideUp from './components/transition/slideUp.vue'
import SlideDown from './components/transition/slideDown.vue'

Vue.config.productionTip = false
Vue.component('SlideUp',SlideUp)
Vue.component('SlideDown',SlideDown)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
