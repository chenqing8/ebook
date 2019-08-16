<template>
  <div class="fade">
    <!-- 渐进渐出 -->
      <transition name="fade">
          <slot></slot>
      </transition>
  </div>
</template>

<script>
export default {
  name: "fade",
  data() {
    return {

    };
  },
  components: {

  },
  computed: {

  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style lang="less" scoped>
.fade{
.fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .fade-enter-to, .fade-leave/* .fade-leave-active below version 2.1.8 */ {
    opacity: 1;
  }
}
</style>
