<template>
  <div class="ebookProcess">
    <transition name="fade">
      <div class="processWarper" :style="themesStyle" v-show="showMenu&&menuItem===1">
        <div class="ebbok_time_warper">
          <span class="ebook_time">12分钟</span>
          <span class="icon-forward icon"></span>
        </div>
        <div class="range_warper">
          <span class="icon-back icon"></span>
          <input type="range" min="0" max="100" value="70" />
          <span class="icon-forward icon"></span>
        </div>
        <div class="title_warper">
          <span class="title">7.手机打卡发</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import eBookMinix from "../../unit/minix";
export default {
  name: "ebookProcess",
  mixins: [eBookMinix],
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.ebookProcess {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 1.33333333rem /* 100/75 */;
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
        font-size:.45333333rem /* 34/75 */;
        font-weight: 800;
      }
    }
    .title_warper {
      text-align: center;
      font-size: .32rem /* 24/75 */
    }
  }
  /* 进度条样式1.先清除原有的样式 ，然后设置进度的样式；2.滑块也清除；3.设置新的轨道；4.设置新的滑块；5.*/
  input[type="range"] {
    flex: 1;
    -webkit-appearance: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    height: 0.13333333rem /* 10/75 */;
    background: #888;
    border-radius: 0.06666667rem /* 5/75 */;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 0.33333333rem /* 25/75 */;
    width: 0.33333333rem /* 25/75 */;
    margin-top: -0.13333333rem /* 10/75 */; /*使滑块超出轨道部分的偏移量相等*/
    background: #ffffff;
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
    box-shadow: 0 0.125em 0.125em #3b4547; /*添加底部阴影*/
  }
}
</style>