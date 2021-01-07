<template>
  <div class="blog-posts">
    <div class="tools">
      <el-row :gutter="20">
        <el-col :span="2">
          <p>6 Posts</p>
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
    <div class="posts">

    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPosts",
  data() {
    return {
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
  }
}
</script>

<style lang="stylus">
.blog-posts
  height 100%
  width 100%

  .tools, .posts
    background-color #fff
    box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)

  .tools
    width 100%
    height 5vh
    padding 1%
    line-height 5vh
    text-align center

</style>