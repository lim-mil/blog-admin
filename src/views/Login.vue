<template>
  <div class="login">
    <el-form>
      <el-form-item label="用户名">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style lang="stylus">
.login
  width 20%
  margin-left 40%
  height 30%
  margin-top 10%

</style>