<template>
  <div class="edit-post-category">

  </div>
</template>

<script>
import {apiPostCategory} from "@/request/api";

export default {
  name: "EditPostCategory",
  data() {
    return {
      category: {}
    }
  },
  mounted() {
    apiPostCategory(this.$route.params.post_category_id).then(response => {
      this.category = response.data;
    })
  }
}
</script>

<style lang="stylus">
.edit-post-category
  width 100%
  height 100%
  background-color #fff
  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)
  overflow auto


</style>