<template>
  <div class="navItem">
    <ul>
      <li v-for="(item,index) in list " :key="index"  :style="themesStyle">
        <p>{{item.label}}</p>
        <tree-menus v-if="item.subitems" :list="item.subitems" class="nextList"></tree-menus>
      </li>
    </ul>
  </div>
</template>

<script>
import eBookMinix from "../../unit/minix"; /* mixins文件 */

export default {
  name: "treeMenus",
  mixins: [eBookMinix],
  props: ["list"],
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
.navItem {
  ul {
    li {
      padding:.33333333rem /* 25/75 */ 0.4rem /* 30/75 */;
      border-bottom: 1px solid #888;
      p {
        font-size:.50666667rem /* 38/75 */;
        font-weight: 100;
        // color: #333;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .nextList {
    padding-left: 20px;
  }
}
</style>
