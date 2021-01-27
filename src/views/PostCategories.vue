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
          :data="blog_categories"
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

export default {
  name: "BlogCategory",
  data: function () {
    return {
      blog_categories: [],
      dialog_visible: false,
      new_post_catogory_name: ""
    }
  },
  mounted() {
    apiPostCategories().then(response => {
      this.blog_categories = response.data;
    })
  },
  methods: {
    handleEdit: function(index, row) {
      // this.$router.push({name: "EditPostCategory", params: {post_category_id: row.id}})
      console.log(index, row);
      this.dialog_visible = true;
    },
    editName: function() {
      this.dialog_visible = false;
    },
    editNameCancel: function() {
      this.new_post_catogory_name = "";
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