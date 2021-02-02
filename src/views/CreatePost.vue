<template>
  <div class="create-post">
    <el-form ref="form" :model="post" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="简述">
        <el-input v-model="description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input
            v-model="content"
            type="textarea"
            resize="none"
            rows="20">
        </el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="status">
          <el-option
              v-for="item in post_status_options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="category_id">
          <el-option
              v-for="item in post_categories_simple"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="create_post">保存</el-button>
        <el-button>恢复</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {apiCreatePost, apiPostCategoriesSimple} from "../request/api";

  export default {
    name: "CreateBlog",
    data() {
      return {
        title: "",
        description: "",
        content: "",
        status: 0,
        category_id: null,
        post: {
          title: "",
          description: "",
          content: "",
          status: 0,
          category_id: null
        },
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
    methods: {
      create_post() {
        let json_data = {};

        json_data["title"] = this.title;
        json_data["description"] = this.description;
        json_data["content"] = this.content;
        json_data["status"] = this.status;
        json_data["category_id"] = this.category_id;

        apiCreatePost(json_data).then(
          // 创建完文章，返回时自动刷新
          this.$router.push({"name": "Posts"})
        );
      }
    },
    mounted() {
      apiPostCategoriesSimple().then(response => {
        for (let i = 0; i < response.data.length; i++) {
          this.post_categories_simple.push({value: response.data[i].id, label: response.data[i].name});
        }
      })
    }
  }
</script>

<style lang="stylus">
.create-post
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