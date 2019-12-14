<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:17:57
 * @LastEditTime: 2019-09-25 11:37:00
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
    </el-collapse>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="日期">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="住址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="商品 ID" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>确定删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <iframe frameborder=0 width=1366 height=500 marginheight=0 marginwidth=0 scrolling=yes src="../../public/dist/index.html"></iframe>
    <ul>
      <li>
        <p class="image" @mouseover="hover(1)"></p>
        <p class="modal" v-show="active===1">
          <span>A</span>
          <span>B</span>
        </p>
      </li>
      <li>
        <p class="image" @mouseover="hover(2)"></p>
        <p class="modal" v-show="active===2">
          <span>A</span>
          <span>B</span>
        </p>
      </li>
      <li>
        <p class="image" @mouseover="hover(3)"></p>
        <p class="modal" v-show="active===3">
          <span>A</span>
          <span>B</span>
        </p>
      </li>
    </ul>
    <cardDragger
      :data="cardList"
      :colNum="4"
      :cardOutsideWidth="300"
      :cardInsideWidth="260"
      :cardOutsideHeight="310"
      :cardInsideHeight="240"
    >546485</cardDragger>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { cardDragger } from 'carddragger'
export default {
  name: "home",
  data() {
    return {
      active: 1,
      activeNames: ["1"],
      visible2: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      dialogVisible: false,
      cardList: [{
        positionNum: 1,
        name: "演示卡片",
        id: "card1",
      }, {
        positionNum: 2,
        name: "演示卡片2",
        id: "card2",
      }, {
        positionNum: 3,
        name: "演示卡片3",
        id: "card",
      }, {
        positionNum: 4,
        name: "演示卡片4",
        id: "card4",
      }, {
        positionNum: 5,
        name: "演示卡片5",
        id: "card5",
      }, {
        positionNum: 6,
        name: "演示卡片6",
        id: "card6",
      }, {
        positionNum: 7,
        name: "演示卡片7",
        id: "card7",
      }, {
        positionNum: 8,
        name: "演示卡片8",
        id: "card8",
      }, {
        positionNum: 11,
        name: "演示卡片11",
        id: "card11",
      }, {
        positionNum: 12,
        name: "演示卡片21",
        id: "card21",
      }, {
        positionNum: 13,
        name: "演示卡片32",
        id: "card32",
      }, {
        positionNum: 14,
        name: "演示卡片43",
        id: "card43",
      }, {
        positionNum: 15,
        name: "演示卡片54",
        id: "card54",
      }],
    };
  },
  components: {
    HelloWorld,
    cardDragger
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
      this.dialogVisible = true;
    },
    hover(id) {
      this.active = id
    }
  }
};
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
ul {
  display: flex;
}
ul > li {
  color: #fff;
  margin-right: 20px;
  position: relative;
}
ul > li > .image {
  width: 100px;
  height: 100px;
  background: #666;

}
ul > li > .modal {
  width: 100px;
  height: 100px;
  background: rgba(255, 0, 200, 0.2);
  position: absolute;
  top: 20px;
  right: 0;
}
</style>
