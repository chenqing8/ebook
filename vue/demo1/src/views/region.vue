<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-26 16:28:16
 * @LastEditTime: 2019-09-26 16:45:52
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="region">
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user">
        <el-input type="username" v-model="ruleForm2.user" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass1">
        <el-input type="password" v-model="ruleForm2.checkPass1" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginForm('ruleForm2')">注册</el-button>
        <el-button @click="regionForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "region",
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else {
        if (value !== this.ruleForm2.checkPass) {
          callback(new Error("两次密码输入不一致"));
          return false;
        }
        callback();
      }
    };
    return {
      ruleForm2: {
        user: "",
        checkPass: "",
        checkPass1: ""
      },
      rules2: {
        user: [{ validator: validateUser, trigger: "blur" }],
        checkPass: [{ validator: validatePass, trigger: "blur" }],
        checkPass1: [{ validator: validatePass1, trigger: "blur" }]
      }
    };
  },
  components: {},
  computed: {},
  methods: {
    loginForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({ path: "/" });
          this.$store.dispatch("SETNAVACTIVEINDEX", "1");
        } else {
          return false;
        }
      });
    },
    regionForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.region {
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: linear-gradient(45deg,#f00,#ff0)
}
</style>
