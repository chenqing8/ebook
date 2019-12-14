<template>
  <div class="about4">
      <ul class="nav">
          <li v-for="item in tree" :key="item">
              {{item.name}}
              <about4 v-if="item.children" :tree="item.children"></about4>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "about4",
  props:['tree'],
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
.about4{
.nav{
    padding-left: 30px;
    list-style: none;
}
}
</style>
