<template>
  <div class="post-categories">
    <div class="tools">

    </div>

    <div class="main-table">
      <el-dialog title="新的分类名" :visible.sync="dialog_visible" :modal-append-to-body="false">
        <el-input v-model="new_post_catogory_name"></el-input>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editNameCancel">取 消</el-button>
          <el-button type="primary" @click="editName">确 定</el-button>
        </div>
      </el-dialog>

      <el-table
          ref="filterTable"
          :data="post_categories"
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
            label="分类名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="posts.length"
            label="文章数"
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
import {apiPostCategories} from "@/request/api";
import {apiUpdatePostCategory} from "../request/api";

export default {
  name: "BlogCategory",
  data: function () {
    return {
      post_categories: [],
      dialog_visible: false,
      new_post_catogory_name: "",
      target_id: 0,
      target_index: -1
    }
  },
  mounted() {
    apiPostCategories().then(response => {
      this.post_categories = response.data;
    })
  },
  methods: {
    // 下面三个应该有更好的实现方式？
    handleEdit: function(index, row) {
      // 编辑、取消、确定 三个点击事件能否共享 el-table 中的数据？
      this.target_id = row.id;
      this.target_index = index;
      this.dialog_visible = true;
    },
    editName: function() {
      if (this.new_post_catogory_name !== "" && this.target_id > 0 && this.target_index > -1) {
        let data = {"name": this.new_post_catogory_name};
        apiUpdatePostCategory(data, this.target_id).then(response => {
          this.post_categories[this.target_index] = response.data;
          this.target_id = 0;
          this.new_post_catogory_name = "";
          this.target_index = -1;
        });
      }
      this.dialog_visible = false;
    },
    editNameCancel: function() {
      this.new_post_catogory_name = "";
      this.target_id = 0;
      this.target_index = -1;
      this.dialog_visible = false;
    }
  }
}
</script>

<style lang="stylus">
.post-categories
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