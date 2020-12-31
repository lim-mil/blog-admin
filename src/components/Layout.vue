<template>
  <el-container>
    <el-aside>

    </el-aside>
    <el-container>
      <el-header></el-header>
      <el-header></el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Layout"
  }
</script>

<style scoped>

</style>