<template>
  <div class="ebookReader">
    <EbookMenu></EbookMenu>
    <div id="read"></div>
    <EbookTitle></EbookTitle>
  </div>
</template>

<script>
import EPub from "epubjs";
import EbookMenu from "./ebookMenu";
import EbookTitle from "./ebookTitle";
import eBookMinix from "../../unit/minix";/* mixins文件 */
import {
  getFontSize,
  setFontSize,
  setFontFamily,
  getFontFamily,
  getThemes,
  setThemes
} from "../../unit/localStorage";
import { themes } from "../../unit/book";

export default {
  name: "ebookReader",
  mixins: [eBookMinix],
  data() {
    return {
      Displacement: 0 /* 手指滑动位移 */,
      TimeDiff: 0 /* 手指滑动产生的时间差 */,
      touchStart: 0 /* 手指滑动的开始位置 */,
      touchTime: 0 /* 手指滑动的开始时间 */,
      rendition: {} /* 电子书渲染结果 */,
      themes: themes(this) /* 获取主题的数据 */
    };
  },
  components: {
    EbookMenu,
    EbookTitle
  },
  methods: {
    /**初始化电子书
     * @name: initEpub
     * @param {null}
     * @return:
     */
    initEpub() {
      const baseUrl = `${process.env.VUE_APP_RES_URL}/epub/${this.filename}.epub`;
      this.book = new EPub(baseUrl);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight
      });
      this.setCurrenBook(this.book);
      /* 电子书显示 */
      this.rendition.display().then(() => {
        this.initFontSize();
        this.initFontFamily();
        this.initThemes();
      });
      /* 用手势实现电子书的翻页 */
      this.rendition.on("touchstart", event => {
        /* 电子书触摸开始 */
        this.touchStart = event.changedTouches[0].clientX;
        this.touchTime = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        /* 电子书触摸结束 */
        this.Displacement = event.changedTouches[0].clientX - this.touchStart;
        this.TimeDiff = event.timeStamp - this.touchTime;
        if (this.Displacement > 40 && this.TimeDiff < 500) {
          this.pervPage();
        } else if (this.Displacement < -40 && this.TimeDiff < 500) {
          this.nextPage();
        } else {
          this.showTitleAndMenu();
        }
      });
      // 注册字体
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`
          ),
          contents.addStylesheet(
            `${process.env.VUE_APP_RES_URL}/fonts/cabin.css`
          )
        ]);
      });
      // 注册主题
      this.themes.forEach(theme => {
        this.rendition.themes.register(theme.name, theme.style);
      });
    },
    /**上一页
     * @name:pervPage
     * @param {null}
     * @return:
     */
    pervPage() {
      if (this.rendition) {
        this.rendition.prev();
        this.hideTitleAndMenu();
      }
    },
    /**下一页
     * @name:nextPage
     * @param {null}
     * @return:
     */
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
        this.hideTitleAndMenu();
      }
    },
    /**显示菜单栏和工具栏
     * @name:showTitleAndMenu
     * @param {null}
     * @return:
     */
    showTitleAndMenu() {
      this.setShowMenu(!this.showMenu);
      this.setMenuItem(-1);
    },
    /**隐藏菜单栏和工具栏
     * @name:hideTitleAndMenu
     * @param {null}
     * @return:
     */
    hideTitleAndMenu() {
      this.setShowMenu(false);
    },
    /**初始化字体大小
     * @name: initFontSize
     * @param {null}
     * @return:
     */
    initFontSize() {
      let fontsizes = getFontSize(this.filename);
      if (fontsizes) {
        this.book.rendition.themes.fontSize(fontsizes + "px");
        this.setDefaultFontsize(fontsizes);
      } else {
        setFontSize(this.filename, this.defaultFontsize);
      }
    },
    /**初始化文字字体
     * @name: initFontFamily
     * @param {null}
     * @return:
     */
    initFontFamily() {
      let fontfamilys = getFontFamily(this.filename);
      if (fontfamilys) {
        this.book.rendition.themes.font(fontfamilys);
        this.setDefaultFontfamily(fontfamilys);
      } else {
        setFontFamily(this.filename, this.defaultFontfamily);
      }
    },
    /**初始化主题
     * @name: initThemes
     * @param {null}
     * @return:
     */
    initThemes() {
      let themes = getThemes(this.filename, "themes");
      if (!themes) {
        setThemes(this.filename, this.defaultThemes);
      } else {
        this.setDefaultThemes(themes);
      }
      // 首先判断是否有存储themes,有就直接用存储的值,没有就用第一个,并且将它存储
      this.book.rendition.themes.select(this.themes[this.defaultThemes].name);
    }
  },
  mounted() {
    let fileName = this.$route.params.filename.replace("|", "/");
    this.setFileName(fileName).then(res => {
      this.initEpub();
    });
  }
};
</script>

<style lang="less" scoped>
.ebookReader {
}
</style>
