<template>
  <div class="about1">
      <p class="title">这是一个组件学习</p>
      <slot></slot>
      <slot name="buttonItem"></slot>
      <slot name="fromItem"></slot>
      <slot name="hasProps" v-for="item in navs" :text="item"></slot>
  </div>
</template>

<script>
export default {
  name: "about1",
  props:['navs'],
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
.about1{
    .title{
        color: red;
    }
}
</style>
