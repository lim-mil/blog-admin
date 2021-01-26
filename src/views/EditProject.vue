<template>
  <div class="edit-project">
    <el-form ref="form" :model="project_update" label-width="80px">
      <el-form-item label="项目名">
        <el-input v-model="project_update.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="project_update.description"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="project_update.link"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="project_update.status">
          <el-option
              v-for="item in project_status_options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="project_update.category.name">
          <el-option
              v-for="item in project_categories_simple"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save_project">保存</el-button>
        <el-button>恢复</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {apiProject, apiProjectCategoriesSimple, apiUpdateProject} from "@/request/api";

export default {
  name: "EditProject",
  data() {
    return {
      project: {},
      project_update: {
        name: "",
        description: "",
        link: "",
        status: "",
        category: {
          id: "",
          name: ""
        }
      },
      project_categories_simple: [],
      project_status_options: [
        {
          value: 0,
          label: "进行中"
        },
        {
          value: 1,
          label: "已停止"
        },
        {
          value: 2,
          label: "已删除"
        }
      ]
    }
  },
  mounted() {
    apiProject(this.$route.params.project_id).then(response => {
      this.project = response.data;
      this.project_update = JSON.parse(JSON.stringify(this.project));
    });

    apiProjectCategoriesSimple().then(response => {
      let categories = response.data;
      for (let i = 0; i < categories.length; i++) {
        this.project_categories_simple.push({label: categories[i].name, value: categories[i].id});
      }
    })
  },
  methods: {
    save_project() {
      let keys = Object.keys(this.project);
      let data = {};
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === "category") {
          if (this.project.category.id !== this.project_update.category.id)
            data.category_id = this.project_update.category.id;
        }  else if (this.project[keys[i]] !== this.project_update[keys[i]]) {
          data[keys[i]] = this.project_update[keys[i]];
        }
      }

      apiUpdateProject(data, this.project.id).then(response => {
        this.project = response.data;
        this.project_update = JSON.parse(JSON.stringify(this.project));
      })
    }
  }
}
</script>

<style lang="stylus">
.edit-project
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