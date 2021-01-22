<template>
  <div class="edit-post">
    <el-form ref="form" :model="post" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="post.title"></el-input>
      </el-form-item>
      <el-form-item label="简述">
        <el-input v-model="post.description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="post.content"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="post.status"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-input v-model="post.category"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {apiPost} from "@/request/api";

export default {
  name: "EditPost",
  data: () => {
    return {
      post: {}
    }
  },
  mounted() {
    apiPost(this.$route.params.post_id).then(response => {
      this.post = response.data;
    })
  }
}
</script>

<style lang="stylus">
.edit-post
  width 100%
  height 100%
  background-color #fff
  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)

  padding 3% 25%

  .el-form
    width 50%

    font-size 1.5em
</style>