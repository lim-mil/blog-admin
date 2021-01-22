<template>
  <div class="edit-post">

  </div>
</template>

<script>
import {apiPost} from "@/request/api";

export default {
  name: "EditPost",
  data: () => {
    return {
      post: {}
    }
  },
  mounted() {
    apiPost()
  }
}
</script>

<style lang="stylus">

</style>