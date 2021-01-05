<template>
  <div class="top-bar">
    <ul class="top-menu">
      <li>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo">
            admin
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "TopBar"
}
</script>

<style lang="stylus">
.top-bar
  position fixed
  right 0
  top 0
  left 12%
  background-color #FFF
  height 5vh
  line-height 5vh
  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)

  .top-menu
    float right
    text-align center
    padding-right 1%

    .userinfo
      cursor: pointer;
      display inline-block
      padding 0 5px

    span.userinfo:hover
      background-color #D3D3D3

</style>