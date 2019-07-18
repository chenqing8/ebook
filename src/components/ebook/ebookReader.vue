<template>
  <div class="ebookReader">
    <EbookMenu></EbookMenu>
    <div id="read"></div>
    <EbookTitle></EbookTitle>
  </div>
</template>

<script>
import EPub from "epubjs";
import EbookMenu from './ebookMenu'
import EbookTitle from './ebookTitle'
import { mapGetters } from "vuex";
export default {
  name: "ebookReader",
  data() {
    return {
      Displacement: 0 /* 手指滑动位移 */,
      TimeDiff: 0 /* 手指滑动产生的时间差 */,
      touchStart: 0 /* 手指滑动的开始位置 */,
      touchTime: 0 /* 手指滑动的开始时间 */,
      rendition: {} /* 电子书渲染结果 */
    };
  },
  components: {
    EbookMenu,
    EbookTitle
  },
  computed: {
    ...mapGetters(["filename"])
  },
  methods: {
    /**初始化电子书
     * @name: initEpub
     * @param {null}
     * @return:
     */
    initEpub() {
      const baseUrl = "http://192.168.50.11:81/" + this.filename + ".epub";
      this.book = new EPub(baseUrl);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight
      });
      console.log(this.rendition);
      this.rendition.display(); /* 电子书显示 */
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
    },
    /**上一页
     * @name:pervPage
     * @param {null}
     * @return:
     */
    pervPage() {
      if (this.rendition) this.rendition.prev();
    },
    /**下一页
     * @name:nextPage
     * @param {null}
     * @return:
     */
    nextPage() {
      if (this.rendition) this.rendition.next();
    },
    /**显示菜单栏和工具栏
     * @name:showTitleAndMenu
     * @param {null}
     * @return:
     */
    showTitleAndMenu() {}
  },
  mounted() {
    let fileName = this.$route.params.filename.replace("|", "/");
    this.$store.dispatch("setFileName", fileName).then(res => {
      this.initEpub();
    });
  }
};
</script>

<style lang="less" scoped>
.ebookReader {
}
</style>
