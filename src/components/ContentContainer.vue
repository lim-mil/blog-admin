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
  height 95vh

  .content
    height 100%
    overflow auto
</style>