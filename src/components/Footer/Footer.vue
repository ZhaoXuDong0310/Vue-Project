<template>
  <div id="footer">
    <!--
      通过动态class和$route.path来实现tab样式切换
    -->
    <ul class="footer_container">
      <li class="footer_item" :class="{on: $route.path === '/homepage'}" @click="goto('/homepage')">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </li>
      <li class="footer_item" :class="{on: $route.path === '/classify'}" @click="goto('/classify')">
        <i class="iconfont icon-icon04"></i>
        <span>分类</span>
      </li>
      <li class="footer_item" :class="{on: $route.path === '/cart'}" @click="goto('/cart')">
        <i class="iconfont icon-shengdangouwuche"></i>
        <span>购物车</span>
      </li>
      <li class="footer_item" :class="{on: $route.path === '/personal'}" @click="goto('/personal')">
        <i class="iconfont icon-xiaolian-"></i>
        <span>我的E宠</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
      goto (path) {
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
#footer
  top-border-1px(#e4e4e4)
  position fixed
  left 0
  right 0
  bottom 0
  height 55px
  width 100%
  display flex
  background #f5f5f5
  .footer_container
    display flex
    justify-content space-around
    align-items center
    width 100%
    .footer_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      justify-content space-between
      color #999
      &.on
        color $bc
      >span
        font-size 10px
        margin 2px 0
      >i
        font-size 26px
        margin 2px 0 -6px 0
</style>
