<template>
  <div class="info">
    <el-form ref="form" :model="info" label-width="80px">
      <el-form-item label="网名">
        <el-input v-model="info.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="info.description"></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-input v-model="info.location"></el-input>
      </el-form-item>
      <el-form-item label="工作">
        <el-input v-model="info.job"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="info.link"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>恢复</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {apiInfo} from "../request/api";

export default {
  name: "Info",
  data() {
    return {
      info: {}
    }
  },
  mounted() {
    apiInfo().then(response => {
      this.info = response.data;
    })
  }
}
</script>

<style lang="stylus">
.info
  width 100%
  height 100%
  background-color #fff
  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)
  overflow auto

  padding 3% 25%

  .el-form
    width 50%
    padding-bottom 3%

    font-size 1.5em
</style>