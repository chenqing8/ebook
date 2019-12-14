<template>
  <div class="about">
    <About1>
      <p>具名插槽的使用：</p>
      <el-button slot="buttonItem">默认按钮</el-button>
    </About1>
    <About1>
      <p>具名插槽的使用：</p>
      <el-form slot="fromItem" :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </About1>
    <About1 :navs="navlist">
      <p>自定义插槽内容的使用：</p>
      <template slot="hasProps" scope="props">
        <span>a:</span>
        <span>{{props.text}}</span>
      </template>
    </About1>
    <About1>
      <p>动态组件</p>
      <el-radio-group v-model="radio3">
        <el-radio-button label="about2"></el-radio-button>
        <el-radio-button label="about3"></el-radio-button>
      </el-radio-group>
      <keep-alive>
        <component :is="radio3"></component>
      </keep-alive>
    </About1>
    <About1>
      <p>递归组件</p>
      <about4 :tree="tree"></about4>
    </About1>
  </div>
</template>

<script>
import About1 from "../components/about1";
import About2 from "../components/about2";
import About3 from "../components/about3";
import About4 from "../components/about4";
export default {
  name: "about",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      navlist: [1, 2, 3, 4],
      radio3: "about2",
      tree: [
        {
          name: "a",
          id: 1,
          children: [
            {
              name: "a1",
              id: 1
            }
          ]
        },
        {
          name: "b",
          id: 1,
          children: [
            {
              name: "a1",
              id: 1
            },
            {
              name: "a2",
              id: 1,
              children: [
                {
                  name: "a22",
                  id: 1
                },
                {
                  name: "a22",
                  id: 1
                }
              ]
            }
          ]
        },
        {
          name: "c",
          id: 1
        }
      ]
    };
  },
  components: {
    About1,
    About3,
    About4,
    About2
  },
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.about {
}
</style>

