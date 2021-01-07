<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/index.css'
  import Layout from "./views/Layout";
  export default {
    components: {Layout}
  }

</script>

<style lang="stylus">
@import "assets/css/base.styl"
/*@import "assets/css/bulma.css"*/
#app
  width 100%
  height 100%
  background-color #D3D3D3
</style>
