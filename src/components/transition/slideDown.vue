<template>
  <div class="slideDown">
    <!-- 从上向下滑出 -->
      <transition name="slide_down">
          <slot></slot>
      </transition>
  </div>
</template>

<script>
export default {
  name: "slideDown",
};
</script>

<style lang="less" scoped>
.slideDown{
 .slide_down-enter-active,
  .slide_down-leave-active {
    transition: all 0.5s;
  }
  .slide_down-enter, .slide_down-leave-to /* .slide_down-leave-active below version 2.1.8 */ {
    transform: translateY(-2.666667rem /* 200/75 */);
  }
  .slide_down-enter-to, .slide_down-leave/* .slide_down-leave-active below version 2.1.8 */ {
    transform: translateY(0);
  }
}
</style>
