<template>
  <div class="side-bar">
    <div class="logo-wrapper">
      limyel
    </div>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <router-link :to="{name: 'Analysis'}">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
      </router-link>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>博客管理</span>
        </template>
        <router-link :to="{name: 'Posts'}">
          <el-menu-item index="2-1">
            博客
          </el-menu-item>
        </router-link>
        <router-link :to="{name: 'PostCategories'}">
          <el-menu-item index="2-2">
            博客分类
          </el-menu-item>
        </router-link>

      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>项目管理</span>
        </template>
        <router-link :to="{name: 'Projects'}">
          <el-menu-item index="3-1">
            项目
          </el-menu-item>
        </router-link>
        <router-link :to="{name: 'ProjectCategories'}">
          <el-menu-item index="3-2">
            项目分类
          </el-menu-item>
        </router-link>

      </el-submenu>

      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
    </el-menu>

  </div>

</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style scoped lang="stylus">
.side-bar
  position fixed
  top 0
  bottom 0
  left 0
  width 12%
  //height 100vh
  background-color #545c64
  z-index 11

  .el-menu
    width 100%
    //height 95vh

  .logo-wrapper
    width 100%
    height 5vh
    text-align center
    line-height 5vh
    font-size 1.5em
    color #B0C4DE

.el-menu--collapse .el-menu .el-submenu, .el-menu--popup, .el-menu-item
  min-width 100%!important

</style>