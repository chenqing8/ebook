<template>
  <div class="ebookTitle">
    <transition name="fade">
      <div class="ebook" :style="themesStyle" v-show="showMenu">
        <div class="icon-back"></div>
        <ul>
          <li class="icon-progress"></li>
          <li class="icon-bright"></li>
          <li class="icon-A"></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import eBookMinix from "../../unit/minix";/* mixins文件 */

export default {
  name: "ebookTitle",
  mixins: [eBookMinix],
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
// @import url("../../assets/css/global.less");
.ebookTitle {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(-2.666667rem /* 200/75 */);
  }
  .fade-enter-to, .fade-leave/* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(0);
  }
  .ebook {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.333333rem /* 100/75 */;
    font-size: 0.533333rem /* 40/75 */;
    // .px2rem(height, 50px);
    // .px2rem(font-size, 20px);
    font-weight: 800;
    box-shadow: 0.026667rem /* 2/75 */ 0 0.133333rem /* 10/75 */ #888;
    padding: 0 0.266667rem /* 20/75 */;
  }
  ul {
    display: flex;
    li {
      &:not(:last-child) {
        margin-right: 0.266667rem /* 20/75 */;
      }
    }
  }
}
</style>
