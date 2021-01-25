<template>
  <div class="blog-posts">
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
          <el-button type="success">New</el-button>
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
    <div class="main-content">
      <el-table
          ref="filterTable"
          :data="posts"
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
            prop="title"
            label="标题"
            width="180">
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            :formatter="formatter">
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
import {apiPosts} from "../request/api";

export default {
  name: "BlogPosts",
  data() {
    return {
      posts: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  mounted() {
    apiPosts().then(response => {
      let data = response.data;
      for (let i = 0; i < data.length; i++) {
        // 时间戳转换为字符串
        let created = new Date(data[i].created * 1000);
        data[i].created = created.getFullYear() + "-" + (created.getMonth()+1) + "-" + created.getDate() + " " + created.getHours() + ":" + created.getMinutes() + ":" + created.getSeconds();
        let updated = new Date(data[i].updated * 1000);
        data[i].updated = updated.getFullYear() + "-" + (updated.getMonth()+1) + "-" + updated.getDate() + " " + updated.getHours() + ":" + updated.getMinutes() + ":" + created.getSeconds();

        // 状态转换
        switch (data[i].status) {
          case 0:
            data[i].status = "草稿";
            break;
          case 1:
            data[i].status = "已发布";
            break;
          case 2:
            data[i].status = "删除";
        }
      }
      this.posts = data;
    })
  },
  methods: {
    handleEdit: function(index, row) {
      this.$router.push({name: "EditPost", params: {post_id: row.id}})
    }
  },
  computed: {
    posts_num: function() {
      return this.posts.length;
    }
  }
}
</script>

<style lang="stylus">
.blog-posts
  height 100%
  width 100%

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