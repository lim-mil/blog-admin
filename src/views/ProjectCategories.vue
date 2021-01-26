<template>
  <div class="project-categories">
    <div class="tools">
      <el-row :gutter="20">
        <el-col :span="2">
          <p>{{posts_num}} Posts</p>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="Search" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
          </el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="show_table">New</el-button>
        </el-col>
        <el-col :span="10">
          <el-row :gutter="10" :justify="end">
            <el-col :span="10">
              <el-select v-model="value" placeholder="Order BY">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="main-table">
      <el-table
          ref="filterTable"
          :data="project_categories"
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
          <template slot-scope="scope">
            {{get_created(scope.row.created)}}
          </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="分类名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="projects.length"
            label="项目数量"
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
import {apiProjectCategories} from "@/request/api";
import {ts2str} from "../utils/time_tools";

export default {
  name: "ProjectCategories",
  data() {
    return {
      project_categories: []
    }
  },
  mounted() {
    apiProjectCategories().then(response => {
      this.project_categories = response.data;
    })
  },
  methods: {
    get_created(created) {
      return ts2str(created);
    },
    show_table() {

    }
  }
}
</script>

<style lang="stylus">
.project-categories
  width 100%
  height 100%

  .tools, .main-table
    background-color #fff
    box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)

  .tools
    width 100%
    height 5vh
    padding 1%
    line-height 5vh
    text-align center

  .main-table
    margin-top 1%
    width 100%
    height 95vh
    padding 1%
    overflow auto
</style>