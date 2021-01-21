<template>
  <div class="top-bar">
    <ul class="top-menu">
      <li @click="logout">
        <span class="userinfo">
          退出
        </span>
      </li>
      <li>
        <span class="userinfo">
          {{username}}
        </span>
      </li>
      <li>
        <span class="userinfo">
          通知
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data: () => {
    return {
      username: "",
    }
  },
  methods: {
    logout: () => {
      localStorage.clear();
      this.$http.push({name: "Login"});
    }
  },
  mounted() {
    this.username = localStorage.getItem("username");
  }
}
</script>

<style lang="stylus">
.top-bar
  position fixed
  right 0
  top 0
  left 12%
  background-color #FFF
  height 5vh
  line-height 5vh
  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)
  z-index 12

  .top-menu
    float right
    text-align center
    padding-right 1%
    width 100%

    li
      float right
      margin-left 1%

    .userinfo
      cursor: pointer;
      display inline-block
      padding 0 5px

    span.userinfo:hover
      background-color #D3D3D3

</style>