<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:17:57
 * @LastEditTime: 2019-09-27 10:58:00
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div id="nav">
      <el-menu :default-active="activeMenu" class="el-menu-demo" mode="horizontal">
        <template>
          <el-menu-item
            :index="item.path"
            v-for="item of $store.state.loginState?navList:navList1"
            :key="item.name"
          >
            <router-link tag="span" :to="item.path">{{item.name}}</router-link>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "首页",
          path: "/home"
        },
        {
          name: "组件进阶",
          path: "/about"
        },
        {
          name: "滚动锚点功能",
          path: "/user"
        }
      ],
      navList1: [
        {
          name: "登录",
          path: "/"
        },
        {
          name: "注册",
          path: "/region"
        }
      ]
    };
  },
  methods: {},
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },
  mounted() {}
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
