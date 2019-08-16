<template>
  <div class="ebookNavContent">
    <div class="search">
      <input type="text" class="search_item" placeholder="请输入内容搜索全文" @click="searchState=true"/>
      <span class="cancel" v-if="searchState" @click="searchState=false">取消</span>
    </div>
    <NavItem :list="list" v-if="!searchState"></NavItem>
  </div>
</template>

<script>
import NavItem from "./navItem";
import { getNavigation } from "../../unit/localStorage";
import eBookMinix from "../../unit/minix"; /* mixins文件 */

export default {
  name: "ebookNavContent",
  mixins: [eBookMinix],
  data() {
    return {
      list: [],
      searchState:false
    };
  },
  components: {
    NavItem
  },
  computed: {},
  methods: {},
  mounted() {
    let navigations = getNavigation(this.filename);
    if (!navigations) {
      navigations = [];
    }
    this.list = navigations;
  }
};
</script>

<style lang="less" scoped>
.ebookNavContent {
  .search {
    margin: 0.53333333rem /* 40/75 */;
    width: calc(100% - 1.06666667rem /* 80/75 */);
    display: flex;
    align-items: center;
    .search_item{
        flex: 1;
        height: 1.33333333rem /* 100/75 */;
        border-radius: 0.26666667rem /* 20/75 */ 0.26666667rem /* 20/75 */;
        background: transparent;
        border: 1px solid #888;
        outline: none;
    }
    .cancel{
        width: 2.66666667rem /* 200/75 */;
        text-align: center;
    }
  }
}
</style>
