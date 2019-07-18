<template>
  <div class="ebookMenu">
    <transition name="fade">
      <div class="ebook" v-show="showMenu">
        <div class="icon-back"></div>
        <ul>
          <li class="icon-cart" @click="showMenu=!showMenu"></li>
          <li class="icon-person"></li>
          <li class="icon-more"></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ebookMenu",
  data() {
    return {
      showMenu: true
    };
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/global.less");
.ebookMenu {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  font-size: 20px;
  font-weight: 800;
  color: #000;
  background: #fff;
  box-shadow: 0 1px 5px #ccc;
  padding: 0 10px;

  z-index: 10;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .ebook {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
    li {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
