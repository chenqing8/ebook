<template>
  <div class="slideRight">
      <transition name="slide_right">
          <slot></slot>
      </transition>
  </div>
</template>

<script>
export default {
  name: "slideRight",
};
</script>

<style lang="less" scoped>
.slideRight{
 .slide_right-enter,
  .slide_right-leave-to {
    transform: translateX(-16rem /* 1200/75 */);
    opacity: 0;
  }
  .slide_right-enter-active,
  .slide_right-leave-active {
    transition: all 0.5s;
  }
  .slide_right-enter-to,
  .slide_right-leave {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
