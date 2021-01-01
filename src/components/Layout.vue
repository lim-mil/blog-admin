<template>
  <el-container>
    <SideBar></SideBar>
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
  import SideBar from "./SideBar";
  export default {
    name: "Layout",
    components: {SideBar}
  }
</script>

<style scoped lang="stylus">
.left-container
  width 220px


</style>