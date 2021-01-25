<template>
  <div class="project-categories">

  </div>
</template>

<script>
import {apiProjectCategories} from "@/request/api";

export default {
  name: "ProjectCategories",
  data() {
    return {
      project_categories: []
    }
  },
  mounted() {
    apiProjectCategories()
  }
}
</script>

<style scoped>

</style>