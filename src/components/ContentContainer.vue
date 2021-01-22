<template>
  <div class="content-container">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name: "ContentContainer"
}
</script>

<style lang="stylus">
.content-container
  position fixed
  right 0
  bottom 0
  top 5vh
  left 12%
  padding 0.5%
  /*overflow auto*/
  //height 95vh
  z-index 10

  .content
    width 100%
    height 100%

</style>