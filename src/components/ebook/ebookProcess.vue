<template>
  <div class="ebookProcess">
    <SlideUp>
      <div class="processWarper" :style="themesStyle" v-show="showMenu&&menuItem===1">
        <div class="ebbok_time_warper">
          <span class="ebook_time">{{title}}</span>
        </div>
        <div class="range_warper">
          <span class="icon-back icon" @click="preSction"></span>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            @change="onProgressChange($event.target.value)"
            @input="onProgressInput($event.target.value)"
            :disabled="false"
            :value="progressData"
            ref="progressItem"
            class="progress"
          />
          <span class="icon-forward icon" @click="nextSection"></span>
        </div>
        <div class="title_warper">
          <span class="title">{{progressData}}%</span>
        </div>
      </div>
    </SlideUp>
  </div>
</template>

<script>
import eBookMinix from "../../unit/minix";
import {
  setProgressData,
  getProgressData,
  setSection,
  setCfi,
  getSection
} from "../../unit/localStorage";
export default {
  name: "ebookProcess",
  mixins: [eBookMinix],
  data() {
    return {
      progressData: 0 /* 进度百分比 */,
      section: 0 /* 章节数 */,
      title: "" /* 当前章节名称 */
    };
  },
  components: {
  },
  computed: {},
  methods: {
    /**进度面板初始加载
     * @name: initProgress
     * @param {null}
     * @return:
     */
    initProgress() {
      let section = getSection(this.filename);
      if (!section) {
        section = 0;
      }
      let progressData = getProgressData(this.filename);
      if (!progressData) {
        progressData = 0;
      }
      this.progressData = progressData;
      this.section = section;
      this.updataProgressBg();
    },
    /**进度条背景色修改
     * @name: updataProgressBg
     * @param {type}
     * @return:
     */
    updataPrrogressBg() {
      this.$refs.progressItem.style.backgroundSize =
        this.progressData + "% 100%";
    },
    /**点击进度条位置
     * @name: onProgressChange
     * @param {progress} 进度
     * @return: 先保存vuex然后在显示
     */
    onProgressChange(progress) {
      this.displayCfi(progress);
    },
    /*拖动进度条位置
     * @name: onProgressInput
     * @param {progress} 进度
     * @return: 先保存vuex然后在显示
     */
    onProgressInput(progress) {
      this.displayCfi(progress);
    },
    /**上一章节
     * @name: preSction
     * @param {type}
     * @return:
     */
    preSction() {
      if (this.section > 0 && this.bookAvailable) {
        this.section--;
        this.displaySection();
      }
    },
    /**下一章节
     * @name: nextSection
     * @param {type}
     * @return:
     */
    nextSection() {
      if (
        this.section < this.currenBook.spine.length - 1 &&
        this.bookAvailable
      ) {
        this.section++;
        this.displaySection();
      }
    },
    /*显示当前进度条的内容
     * @name: displayCfi
     * @param {progress} 进度
     * @return: 传入一个百分比小数给cfiFromPercentage，进行渲染
     */
    displayCfi(progress) {
      this.progressData = progress;
      this.updataProgressBg();
      let cfi = this.currenBook.locations.cfiFromPercentage(
        this.progressData / 100
      );
      this.currenBook.rendition.display(cfi).then(() => {
        let currenLoca = this.currenBook.rendition.currentLocation();
        if (JSON.stringify(currenLoca) !== "{}") {
          this.section = currenLoca.start.index;
          setSection(this.filename, currenLoca.start.index);
        }
      });
      setCfi(this.filename, cfi);
      setProgressData(this.filename, this.progressData);
    },
    // 显示章节内容
    displaySection() {
      const sectionInfo = this.currenBook.section(this.section);
      if (sectionInfo && sectionInfo.href) {
        this.currenBook.rendition.display(sectionInfo.href).then(() => {
          const currenLocation = this.currenBook.rendition.currentLocation();
          let progress = this.currenBook.locations.percentageFromCfi(
            currenLocation.start.cfi
          );
          this.progressData = Math.floor(progress * 100);
          this.updataProgressBg();
          setSection(this.filename, this.section);
          setCfi(this.filename, sectionInfo.href);
          setProgressData(this.filename, this.progressData);
        });
      }
    }
  },
  mounted() {
    this.initProgress();
  }
};
</script>

<style lang="less" scoped>
.ebookProcess {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 1.33333333rem /* 100/75 */;
  z-index: -1;

  .processWarper {
    box-shadow: 0 -1px 5px #888;
    padding: 0.26666667rem /* 20/75 */ 0.53333333rem /* 40/75 */;
    font-size: 0.34666667rem /* 26/75 */;
    .ebbok_time_warper {
      text-align: center;
    }
    .range_warper {
      margin: 0.13333333rem /* 10/75 */ 0;
      display: flex;
      align-items: center;
      .icon {
        width: 1.33333333rem /* 100/75 */;
        text-align: center;
        font-size: 0.45333333rem /* 34/75 */;
        font-weight: 800;
      }
      .progress {
        -webkit-appearance: none; /*清除系统默认样式*/
        width: 100%;
        background: -webkit-linear-gradient(#f00, #ddd) no-repeat, #ddd; /*设置左边颜色为#61bd12，右边颜色为#ddd*/
        height: 0.1rem; /*横条的高度*/
        border-radius: 0.1rem;
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 0.53333333rem /* 40/75 */;
          width: 0.53333333rem /* 40/75 */;
          border-radius: 50%;
          background: white;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
          border: 1px solid #ddd;
        }
      }
    }
    .title_warper {
      text-align: center;
      font-size: 0.32rem; /* 24/75 */
    }
  }
  /* 进度条样式1.先清除原有的样式 ，然后设置进度的样式；2.滑块也清除；3.设置新的轨道；4.设置新的滑块；5.*/
  // input[type="range"] {
  //   flex: 1;
  //   -webkit-appearance: none;
  // }
  // input[type="range"]::-webkit-slider-thumb {
  //   -webkit-appearance: none;
  // }
  // input[type="range"]::-webkit-slider-runnable-track {
  //   height: 0.13333333rem /* 10/75 */;
  //   border-radius: 0.06666667rem /* 5/75 */;
  // }
  // input[type="range"]::-webkit-slider-thumb {
  //   -webkit-appearance: none;
  //   height: 0.33333333rem /* 25/75 */;
  //   width: 0.33333333rem /* 25/75 */;
  //   margin-top: -0.13333333rem /* 10/75 */; /*使滑块超出轨道部分的偏移量相等*/
  //   background: #ffffff;
  //   border-radius: 50%; /*外观设置为圆形*/
  //   border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
  //   box-shadow: 0 0.125em 0.125em #3b4547; /*添加底部阴影*/
  // }
}
</style>
