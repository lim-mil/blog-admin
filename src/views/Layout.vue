<template>
  <div>
    <SideBar></SideBar>
    <MainContainer></MainContainer>
  </div>
</template>

<script>
  import SideBar from "../components/SideBar";
  import MainContainer from "@/components/MainContainer";
  export default {
    name: "Layout",
    components: {MainContainer, SideBar}
  }
</script>

<style scoped lang="stylus">




</style>