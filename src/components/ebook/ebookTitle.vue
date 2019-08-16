<template>
  <div class="ebookTitle">
    <SlideDown>
      <div class="ebook" :style="themesStyle" v-show="showMenu">
        <div class="icon-back"></div>
        <ul>
          <li class="icon-progress"></li>
          <li class="icon-bright"></li>
          <li class="icon-A"></li>
        </ul>
      </div>
    </SlideDown>
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
