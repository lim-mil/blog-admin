<template>
  <div class="projects">
    <div class="tools">

    </div>

    <div class="main-content">
      <el-table
          ref="filterTable"
          :data="projects"
          style="width: 100%">
        <el-table-column
            prop="created"
            label="创建日期"
            sortable
            width="180"
            column-key="date"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
            prop="name"
            label="项目名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="description"
            label="项目描述"
            :formatter="formatter">
        </el-table-column>
        <el-table-column
            prop="link"
            label="项目链接"
            :formatter="formatter">
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            :formatter="formatter">
          <template slot-scope="scope">
            {{project_status(scope.row.status)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="category.name"
            label="分类"
            :formatter="formatter">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {apiProjects} from "@/request/api";
import {ts2str} from "@/utils/time_tools";

export default {
  name: "ProjectProjects",
  data() {
    return {
      projects: [],

    }
  },
  mounted() {
    apiProjects().then(response => {
      let projects = response.data;

      for (let i = 0; i < projects.length; i++) {
        projects[i].created = ts2str(projects[i].created)
      }
      console.log(projects)
      this.projects = projects;
    })
  },
  methods: {
    project_status(status) {
      switch (status) {
        case 0:
          return "进行中";
        case 1:
          return "已停止";
        case 2:
          return "已删除";
      }
      return "unknown";
    },
    handleEdit: function(index, row) {
      this.$router.push({name: "EditProject", params: {project_id: row.id}})
    }
  },
  computed: {

  }
}
</script>

<style lang="stylus">
.projects
  width 100%
  height 100%

  .tools, .main-content
    background-color #fff
    box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)

  .tools
    width 100%
    height 5vh
    padding 1%
    line-height 5vh
    text-align center

  .main-content
    margin-top 1%
    width 100%
    height 95vh
    padding 1%
    overflow auto

</style>