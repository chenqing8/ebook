<template>
  <div class="ebookSetThemes">
    <transition name="fade">
      <div class="themesWarper" :style="themesStyle" v-if="showMenu&&menuItem==2">
        <div class="ThemesColor">
          <p
            class="themes"
            @click="setThemes(index)"
            v-for="(item,index) in themes"
            :key="index"
            :style="{'backgroundColor':item.style.body.background}"
            :class="{'selected':index===defaultThemes}"
          ></p>
        </div>
        <div class="ThemesTitle">
          <p class="title" v-for="(item,index) in themes" :key="index">{{item.alias}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import eBookMinix from "../../unit/minix"; /* mixins文件 */
import { themes } from "../../unit/book"; /* 静态资源文件 */
import { setThemes } from "../../unit/localStorage"; /* 缓存文件 */
export default {
  name: "ebookSetThemes",
  mixins: [eBookMinix],
  data() {
    return {
      themes: themes(this) /* 获取主题的数据 */
    };
  },
  components: {},
  computed: {},
  methods: {
    /**设置主题
     * @name: setThemes
     * @param {id} 用来控制是第几个主题
     * @return:
     */
    setThemes(id) {
      // 确保在vuex中设置了themes后在去从vuex中调用
      this.setDefaultThemes(id).then(() => {
        this.currenBook.rendition.themes.select(
          this.themes[this.defaultThemes].name
        );
      });
      setThemes(this.filename, id);
    }
  }
};
</script>

<style lang="less" scoped>
.ebookSetThemes {
  position: absolute;
  bottom: 1.33333333rem /* 100/75 */;
  right: 0;
  left: 0;
  z-index: -1;
  .fade-enter,
  .fade-leave-to {
    transform: translateY(1.33333333rem /* 100/75 */);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.25s;
  }
  .fade-enter-to,
  .fade-leave {
    transform: translateY(0);
  }
  .themesWarper {
    padding: 0.26666667rem /* 20/75 */ 0.53333333rem /* 40/75 */;
    box-shadow: 0 -1px 5px #888;
    .ThemesColor,
    .ThemesTitle {
      display: flex;
      align-items: center;
      justify-items: center;
      justify-content: space-between;
      .themes,
      .title {
        flex: 1;
        height: 0.4rem /* 30/75 */;
        margin: 0.06666667rem /* 5/75 */ 0.26666667rem /* 20/75 */;
        text-align: center;
        font-size: 0.34666667rem /* 26/75 */;
      }
      .themes {
        border: 1px solid #fff;
      }
      .selected {
        box-shadow: 0 1px 6px #555;
      }
    }
  }
}
</style>
