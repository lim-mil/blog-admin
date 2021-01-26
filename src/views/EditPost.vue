<template>
  <div class="edit-post">
    <el-form ref="form" :model="post_update" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="post_update.title"></el-input>
      </el-form-item>
      <el-form-item label="简述">
        <el-input v-model="post_update.description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          v-model="post_update.content"
          type="textarea"
          resize="none"
          rows="20">
        </el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="post_update.status">
          <el-option
            v-for="item in post_status_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="post_update.category.id">
          <el-option
            v-for="item in post_categories_simple"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save_post">保存</el-button>
        <el-button>恢复</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {apiPost, apiUpdatePost} from "@/request/api";
import {apiPostCategoriesSimple} from "@/request/api";

export default {
  name: "EditPost",
  data: () => {
    return {
      post: {},
      post_update: {},
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
      this.post_update = JSON.parse(JSON.stringify(this.post));

    });

    apiPostCategoriesSimple().then(response => {
      for (let i = 0; i < response.data.length; i++) {
        this.post_categories_simple.push({value: response.data[i].id, label: response.data[i].name});
      }
    })
  },
  methods: {
    save_post() {
      let keys = Object.keys(this.post);
      let data = {};
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === "category") {
          if (this.post.category.id !== this.post_update.category.id)
            data.category_id = this.post_update.category.id;
        }  else if (this.post[keys[i]] !== this.post_update[keys[i]]) {
          data[keys[i]] = this.post_update[keys[i]];
        }
      }
      apiUpdatePost(data, this.post.id).then(response => {
        this.post = response.data;
        this.post_update = response.data;
      })
    }
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