<template>
  <div class="layout">
    <SideBar></SideBar>
    <TopBar></TopBar>
    <div class="main-container">
      <ContentContainer></ContentContainer>
    </div>

  </div>
</template>

<script>
  import SideBar from "../components/SideBar";
  import TopBar from "@/components/TopBar";
  import ContentContainer from "@/components/ContentContainer";
  export default {
    name: "Layout",
    components: {SideBar, TopBar, ContentContainer}
  }
</script>

<style scoped lang="stylus">
.layout
  width 100%
  height 100vh
  background-color #D3D3D3

  .main-container
    position: fixed
    left 12%
    top 0
    bottom 0
    right 0
    width 100%
    padding 1%


</style>