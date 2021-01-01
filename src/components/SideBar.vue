<template>
  <el-aside style="width: 220px">
    <el-menu>
      <el-submenu index="1">
        <!-- 这个 template 是一级菜单的内容模板 -->
        <i class="el-icon-menu"></i>
        <span>一级菜单</span>
        <!-- 在一级菜单中，可以嵌套二级菜单 -->
        <el-menu-item>
          <i class="el-icon-menu"></i>
          <span slot="title">二级菜单</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>

  </el-aside>

</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style scoped lang="stylus">

</style>