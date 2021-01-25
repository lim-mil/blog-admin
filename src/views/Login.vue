<template>
  <div class="login">
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {apiLogin} from "../request/api";

export default {
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    login: function (event) {
      apiLogin(
        {username: this.username, password: this.password}
      ).then(response => {
        localStorage.setItem("JWT_TOKEN", response.data.access_token);
        localStorage.setItem("username", response.data.username);
        this.$router.push({name: "Analysis"});
      }).catch(error => {
        this.username = "";
        this.password = "";
        this.$message.error(error.message);
      })

    }
  }
}
</script>

<style lang="stylus">
.login
  width 20%
  margin-left 40%
  height 30%
  margin-top 10%

</style>