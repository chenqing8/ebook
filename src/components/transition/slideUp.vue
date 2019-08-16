<template>
  <div class="slideUp">
      <!-- 向上滑出 -->
      <transition name="slide_up">
          <slot></slot>
      </transition>
  </div>
</template>

<script>
export default {
  name: "slideUp",
};
</script>

<style lang="less" scoped>
.slideUp{
  .slide_up-enter,
  .slide_up-leave-to {
    transform: translateY(1.33333333rem /* 100/75 */);
  }
  .slide_up-enter-active,
  .slide_up-leave-active {
    transition: all 0.25s;
  }
  .slide_up-enter-to,
  .slide_up-leave {
    transform: translateY(0);
  }
}
</style>
