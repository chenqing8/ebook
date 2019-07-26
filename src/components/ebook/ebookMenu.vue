<template>
  <div class="ebookMenu">
    <transition name="fade">
      <div
        class="ebook"
        :style="themesStyle"
        v-show="showMenu"
        :class="{'hideBoxShadow':menuItem>=0}"
      >
        <ul>
          <li class="icon-menu" @click="chooseItem(0)"></li>
          <li class="icon-progress" @click="chooseItem(1)"></li>
          <li class="icon-bright" @click="chooseItem(2)"></li>
          <li class="icon-A" @click="chooseItem(3)"></li>
        </ul>
        <EbookSetFont />
        <EbookSetFontFamily />
        <EbookSetThemes />
        <EbookProcess />
      </div>
    </transition>
  </div>
</template>

<script>
import eBookMinix from "../../unit/minix";/* mixins文件 */
import EbookSetFont from "../../components/ebook/ebookSetFont";
import EbookSetFontFamily from "../../components/ebook/ebookSetFontFamily";
import EbookSetThemes from "../../components/ebook/ebookSetThemes";
import EbookProcess from "../../components/ebook/ebookProcess";

export default {
  name: "ebookMenu",
  mixins: [eBookMinix],
  data() {
    return {};
  },
  components: {
    EbookSetFont,
    EbookSetFontFamily,
    EbookSetThemes,
    EbookProcess
  },
  computed: {},
  methods: {
    chooseItem(id) {
      if (this.menuItem == id) {
        /* 重复点击隐藏，否则展示其他内容 */
        this.setMenuItem(-1);
      } else {
        this.setMenuItem(id);
      }
    }
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
// @import url("../../assets/css/global.less");
.ebookMenu {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.25s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(2.666667rem /* 200/75 */);
  }
  .fade-enter-to, .fade-leave/* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(0);
  }
  .ebook {
    height: 1.333333rem /* 100/75 */;
    font-size: 0.533333rem /* 40/75 */;
    font-weight: 800;
    box-shadow: 0px -1px 5px #888;
    padding: 0 1.066667rem /* 80/75 */;
  }
  .hideBoxShadow {
    box-shadow: 0px 0 0px #888;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    li {
      &:not(:last-child) {
        margin-right: 0.266667rem /* 20/75 */;
      }
    }
  }
}
</style>
