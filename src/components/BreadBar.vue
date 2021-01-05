<template>
  <div class="bread-bar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>
export default {
name: "BreadBar"
}
</script>

<style lang="stylus">
.bread-bar
  background-color #fff


/*.el-breadcrumb*/


</style>