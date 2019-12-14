/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:17:57
 * @LastEditTime: 2019-09-27 16:36:46
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {installCardDragger} from 'carddragger'
Vue.use(installCardDragger)
Vue.config.productionTip = false
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  let loginSate=store.state.loginState;
  if(loginSate||to.meta.requireLogin){
    next();
  }else{
    if(to.path=='/'){ //如果是登录页面路径，就直接next()
        next();
    } else { //不然就跳转到登录;
        Vue.prototype.$message.error('请先进行登录');
        next('/');
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
