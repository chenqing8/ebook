<template>
  <div class="ebookNav">
    <SlideRight>
      <!--  v-show="menuItem==0" -->
      <div class="warper" v-show="menuItem==0">
        <div class="nav_warper" :style="themesStyle">
          <component :is="currenTab===1?EbookNavContent:EbookNavBook"></component>
          <div class="tab">
            <div class="tab_item" :class="{'selected':currenTab===1}" @click="changeTab(1)">目录</div>
            <div class="tab_item" :class="{'selected':currenTab===2}" @click="changeTab(2)">书签</div>
          </div>
        </div>
        <div class="mask" @click="hideMenu" :style="themesStyle"></div>
      </div>
    </SlideRight>
  </div>
</template>

<script>
import SlideRight from "../transition/slideRight";
import EbookNavContent from "../ebook/ebookNavContent";
import EbookNavBook from "../ebook/ebookNavBook";
import eBookMinix from "../../unit/minix"; /* mixins文件 */
export default {
  name: "ebookNav",
  mixins: [eBookMinix],
  data() {
    return {
      currenTab:1,
      EbookNavBook:EbookNavBook,
      EbookNavContent:EbookNavContent
    };
  },
  components: {
    SlideRight,
  },
  computed: {},
  methods: {
    hideMenu() {
      this.setMenuItem(-1);
    },
    changeTab(id){
      this.currenTab=id;
    }
  },
  mounted() {

  }
};
</script>

<style lang="less" scoped>
.ebookNav {
  .warper {
    position: fixed;
    top: 1.33333333rem /* 100/75 */;
    bottom: 1.33333333rem /* 100/75 */;
    right: 0;
    left: 0;
    display: flex;
    .mask {
      flex: 0 0 15%;
      width: 15%;
      height: 100%;
      opacity: 0.65;
      -moz-opacity: 0.65;
      filter: alpha(opacity=65);
      z-index: -1;
    }
    .nav_warper {
      flex: 0 0 85%;
      width: 85%;
      height: 100%;
      overflow: auto;
      .tab {
        position: absolute;
        bottom: 0;
        right: 15%;
        left: 0;
        display: flex;
        border-top: 1px solid #888;
        padding: 25px 0;
        .tab_item {
          flex: 1;
          text-align: center;
        }
        .selected{
          text-shadow:1px 1px 1px #888;
        }
      }
    }
  }
}
</style>
