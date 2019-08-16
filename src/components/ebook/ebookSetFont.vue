<template>
  <div class="ebookSetFont">
    <SlideUp>
      <div class="warper" :style="themesStyle" v-if="showMenu&&menuItem==3">
        <div class="setfontsizewarper">
          <i :style="{'font-size':fSizes[0]+'px'}">A</i>
          <div class="fontLine">
            <div
              class="space"
              @click.stop="setFontSizes(index)"
              v-for="(item,index) in fSizes"
              :key="index"
              :data-id="index"
            >
              <div class="line"></div>
              <div class="dot">
                <div class="boll" v-if="defaultFontsize===item">
                  <span class="smallBoll"></span>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <i :style="{'font-size':fSizes[fSizes.length-1]+'px'}">A</i>
        </div>
        <div class="setfontfailamywarper" @click="setFonfamily">
          <span class="setfonfamily">{{defaultFontfamily}}</span>
          <span class="setfonfamilyicon">
            <span class="icon-forward"></span>
          </span>
        </div>
      </div>
    </SlideUp>
  </div>
</template>

<script>
import eBookMinix from "../../unit/minix";/* mixins文件 */
import { setFontSize } from "../../unit/localStorage";/* 缓存文件 */

export default {
  name: "ebookSetFont",
  mixins: [eBookMinix],
  data() {
    return {
      fSizes: [12, 14, 16, 18, 20, 22]
    };
  },
  components: {},
  computed: {},
  methods: {
    /**设置字号
     * @name:setFontSizes
     * @param {id}设置字号的编号
     * @return:
     */
    setFontSizes(id) {
      let fs = this.fSizes[id];
      // this.setDefaultFontsize(fs);
      this.currenBook.rendition.themes.fontSize(fs + "px");
      setFontSize(this.filename, fs);
    },
    /**设置字体
     * @name:setFonfamily
     * @param {}
     * @return:
     */
    setFonfamily() {
      this.setMenuItem(4);
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.ebookSetFont {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 1.333333rem /* 100/75 */;
  z-index: -1;
  .warper {
    height: 2rem /* 150/75 */;
    box-shadow: 0px -1px 5px #888;
  }
  .setfontsizewarper {
    height: 1.333333rem /* 100/75 */;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.533333rem /* 40/75 */;
    i {
      font-size: 0.533333rem /* 40/75 */;
    }
    .fontLine {
      display: flex;
      .space {
        display: flex;
        align-items: flex-end;
        &:first-child {
          .line {
            &:first-child {
              border-top: 1px solid transparent;
            }
          }
        }
        &:last-child {
          .line {
            &:last-child {
              border-top: 1px solid transparent;
            }
          }
        }
        .line {
          width: 0.6rem /* 45/75 */;
          border-top: 1px solid #888;
        }
        .dot {
          height: 0.133333rem /* 10/75 */;
          border-right: 1px solid #888;
          position: relative;
          .boll {
            width: 0.26666667rem /* 20/75 */;
            height: 0.26666667rem /* 20/75 */;
            border-radius: 50%;
            border: 1px solid #888;
            background: #fff;
            position: absolute;
            top: -0.06666667rem /* 5/75 */;
            left: -0.06666667rem /* 5/75 */;
            text-align: center;
            line-height: 0.04rem /* 3/75 */;
            .smallBoll {
              display: inline-block;
              width: 0.13333333rem /* 10/75 */;
              height: 0.13333333rem /* 10/75 */;
              border-radius: 50%;
              background: #000;
            }
          }
        }
      }
    }
  }
  .setfontfailamywarper {
    width: 100%;
    font-size: 0.346667rem /* 26/75 */;
    text-align: center;
  }
}
</style>
