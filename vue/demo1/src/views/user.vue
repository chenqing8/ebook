<template>
  <div class="user">
    <div class="title">
      <p @click="jump(0)" :class="activeItem===0?'active':''">第一页</p>
      <p @click="jump(1)" :class="activeItem===1?'active':''">第二页</p>
      <p @click="jump(2)" :class="activeItem===2?'active':''">第三页</p>
    </div>
    <div class="content">
      <div class="line line-blue"></div>
      <div class="line line-red"></div>
      <div class="line line-green"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      activeItem: 0
    };
  },
  components: {},
  computed: {},
  methods: {
    jump(index) {
      this.activeItem = index;
      let item = document.querySelectorAll(".line");
      let defaultScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      let itemScroll = item[index].offsetTop;
      let step = itemScroll / 50;
      if (itemScroll > defaultScroll) {
        smoothDown();
      } else {
        let newTotal = defaultScroll - itemScroll;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothDown() {
        if (defaultScroll < itemScroll) {
          defaultScroll += step;
          document.body.scrollTop = defaultScroll;
          document.documentElement.scrollTop = defaultScroll;
          window.pageYOffset = defaultScroll;
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = itemScroll;
          document.documentElement.scrollTop = itemScroll;
          window.pageYOffset = itemScroll;
        }
      }
      function smoothUp() {
        if (defaultScroll > itemScroll) {
          defaultScroll -= step;
          document.body.scrollTop = defaultScroll;
          document.documentElement.scrollTop = defaultScroll;
          window.pageYOffset = defaultScroll;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = itemScroll;
          document.documentElement.scrollTop = itemScroll;
          window.pageYOffset = itemScroll;
        }
      }
    },
    onScroll() {
      let items = document.querySelectorAll(".line");
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        let defaultScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (element.offsetTop <= defaultScroll) {
          this.activeItem = i;
        }
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
    });
  }
};
</script>

<style lang="less" scoped>
.user {
  .title {
    position: fixed;
    top: 150px;
    right: 50px;
    outline: 1px solid red;
    > p {
      height: 30px;
      line-height: 30px;
    }
    .active {
      color: #fff;
    }
  }
  .line {
    height: 400px;
    width: 100%;
    &-red {
      background: rgb(133, 71, 71);
    }
    &-blue {
      background: rgb(106, 106, 161);
    }
    &-green {
      background: rgb(83, 122, 83);
    }
  }
}
</style>
