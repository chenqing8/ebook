<!--
 * @Description: In User Settings EditLogin
 * @Author: your name
 * @Date: 2019-09-26 14:01:05
 * @LastEditTime: 2019-09-27 10:41:14
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="Login">
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
      <el-form-item>
        <el-button type="primary" @click="loginForm('ruleForm2')">登录</el-button>
        <el-button @click="regionForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          user: '',
          checkPass: '',
        },
        rules2: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
  },
  components: {},
  computed: {},
  methods: {
    loginForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch('SETLOGINSTATE',true)
          this.$router.push({path:'/home'})//对象
          // this.$router.push('/home')//字符串
          // this.$router.push({name:'home'})命名的路由
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
.Login {
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: linear-gradient(45deg,#f00,#ff0)
}
</style>
