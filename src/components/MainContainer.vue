<template>
  <div class="main-container">
    <TopBar></TopBar>
    <BreadBar></BreadBar>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import BreadBar from "@/components/BreadBar";
export default {
name: "MainContainer",
  components: {BreadBar, TopBar}
}
</script>

<style lang="stylus">
.main-container
  position: fixed
  left 12%
  top 0
  bottom 0
  right 0
  width 88%
  background-color 	#F5F5F5
</style>