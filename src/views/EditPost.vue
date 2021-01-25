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
        <el-input
          v-model="post.content"
          type="textarea"
          resize="none"
          rows="20">
        </el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="post.status">
          <el-option
            v-for="item in post_status_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="post.category.name">
          <el-option
            v-for="item in post_categories_simple"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>恢复</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {apiPost} from "@/request/api";
import {apiPostCategoriesSimple} from "../request/api";

export default {
  name: "EditPost",
  data: () => {
    return {
      post: {},
      post_categories_simple: [],
      post_status_options: [
        {
          value: 0,
          label: "草稿"
        },
        {
          value: 1,
          label: "已发布"
        },
        {
          value: 2,
          label: "已删除"
        }
      ]
    }
  },
  mounted() {
    apiPost(this.$route.params.post_id).then(response => {
      this.post = response.data;
    });

    apiPostCategoriesSimple().then(response => {
      for (let i = 0; i < response.data.length; i++) {
        this.post_categories_simple.push({value: response.data[i].id, label: response.data[i].name});
      }
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
  overflow auto

  padding 3% 25%

  .el-form
    width 50%
    padding-bottom 3%

    font-size 1.5em
</style>