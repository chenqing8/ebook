/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:17:57
 * @LastEditTime: 2019-09-26 16:44:11
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList:[{
      name:'登录',
      path:'/'
    },{
      name:'注册',
      path:'/region'
    }],
    loginState:false,
    navActiveIndex:'1'
  },
  mutations: {
    setnavList(state,data){
      state.navList=data;
    },
    setLoginState(state,data){
      state.loginState=data;
    },
    setNavActiveIndex(state,data){
      state.navActiveIndex=data;
    }
  },
  actions: {
    SETNAVLIST({commit},data){
      commit('setnavList',data)
    },
    SETLOGINSTATE({commit},data){
      commit('setLoginState',data)
    },
    SETNAVACTIVEINDEX({commit},data){
      commit('setNavActiveIndex',data)
    }
  }
})
