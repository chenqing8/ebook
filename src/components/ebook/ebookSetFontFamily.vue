<template>
  <div class="ebookSetFontFamily">
    <transition name="fade">
      <div class="warper" :style="themesStyle" v-if="showMenu&&menuItem==4">
        <div class="title">
          <span class="icon-back icon" @click="goSetFontSize"></span>
          <span class="choose">{{$t('book.selectFont')}}</span>
        </div>
        <div class="list">
          <div
            class="item"
            @click="chooseItem(index)"
            v-for="(item,index) in fFamilys"
            :key="index"
            :class="{'currenItem':defaultFontfamily==item}"
          >
            <span>{{item}}</span>
            <span class="icon-check" v-show="defaultFontfamily==item"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import eBookMinix from "../../unit/minix";/* mixins文件 */
import { setFontFamily, getFontFamily } from "../../unit/localStorage";/* 缓存文件 */

export default {
  name: "ebookSetFontFamily",
  mixins: [eBookMinix],
  data() {
    return {
      fFamilys: ["Cabin", "Days One", "Montserrat", "Tangerine"]
    };
  },
  components: {},
  computed: {},
  methods: {
    goSetFontSize() {
      this.setMenuItem(3);
    },
    chooseItem(id) {
      setFontFamily(this.filename, this.fFamilys[id]);
      this.setDefaultFontfamily(this.fFamilys[id]);
      this.currenBook.rendition.themes.font(this.fFamilys[id]);
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.ebookSetFontFamily {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 1.333333rem /* 100/75 */;
  z-index: -1;
  font-size: 0.32rem /* 24/75 */;
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

  .warper {
    height: 3.33333333rem /* 250/75 */;
    box-shadow: 0px -1px 5px #888;
    .title {
      width: 100%;
      line-height: 0.66666667rem /* 50/75 */;
      text-align: center;
      position: relative;
      .icon {
        position: absolute;
        top: 0.16rem /* 12/75 */;
        left: 0.26666667rem /* 20/75 */;
      }
    }
    .list {
      height: 2.66666667rem /* 200/75 */;
      overflow: auto;
      .item {
        padding: 0.26666667rem /* 20/75 */ 1.33333333rem /* 100/75 */;
        display: flex;
        justify-content: space-between;
        &:last-child {
          border-bottom: 0px;
        }
      }
      .currenItem {
        color: royalblue;
      }
    }
  }
}
</style>
