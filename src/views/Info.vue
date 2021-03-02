<template>
  <div class="info">
    <el-upload
        class="avatar-uploader"
        :action="upload_url"
        :show-file-list="false"
        :http-request="uploadImage"
        :before-upload="beforeAvatarUpload">
      <img v-if="image_url" :src="image_url" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <el-form ref="form" :model="info" label-width="80px">
      <el-form-item label="网名">
        <el-input v-model="info.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="info.description"></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-input v-model="info.location"></el-input>
      </el-form-item>
      <el-form-item label="工作">
        <el-input v-model="info.job"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="info.link"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateInfo">保存</el-button>
        <el-button>恢复</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {apiInfo, apiUploadImage} from "../request/api";
import CONFIG from "../config";

export default {
  name: "Info",
  data() {
    return {
      info: {
        name: "",
        description: "",
        location: "",
        job: "",
        link: ""
      },
      image: null,
      image_url: CONFIG.BASE_SERVER + CONFIG.MEDIA_API + "/img/limyel.jpg",
      upload_url: CONFIG.BASE_SERVER + CONFIG.BASE_API + "/info/image",
    }
  },
  methods: {
    // 上传图片无法后，前端无法即时更新
    uploadImage(file) {
      if (this.image) {
        apiUploadImage(file).then(response => {
          if (response.code == 200) {
            this.image = null;
          }
        });
        this.image = null;
      }
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }

      this.image = file;
      return isJPG && isLt2M;
    },
    updateInfo() {

    }
  },
  mounted() {
    apiInfo().then(response => {
      this.info = response.data;
    })
  }
}
</script>

<style lang="stylus">
.info
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

    .img-show
      width 50%
      margin-bottom 5%

  .avatar-uploader .el-upload {
    margin-bottom 5%
    width 16%
    margin-left 20%
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>