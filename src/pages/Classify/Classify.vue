<template>
  <div>
    <header class="header">
      <div class="header_top">
        <router-link to="/classify/classify_menu1" class="header_top_left">分类</router-link>
      </div>
      <div class="header_bottom">
        <router-link to="/classify/classify_menu2" class="header_top_right">品牌</router-link>
      </div>
      <a class="img_wrapper" href="javascript:">
        <img src="./images/search-ico.png" alt="">
      </a>
    </header>
    <router-view/>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    bottom-border-1px(#cbcbcb)
    position fixed
    left 0
    top 0
    right 0
    box-sizing border-box
    height 40px
    padding 0 15px
    display flex
    justify-content center
    align-items center
    font-size 13px
    background #FFF
    z-index 11
    .header_top
      width 50%
      text-align right
      padding-right 5%
      .header_top_left
        display inline-block
        box-sizing border-box
        line-height 40px
        text-align right
        height 40px
        padding 0 4px
        font-weight 700
        color #000
        &.router-link-active
          color red
          border-bottom 2px solid red
    .header_bottom
      width 50%
      padding-left 5%
      .header_top_right
        display inline-block
        height 40px
        line-height 40px
        font-weight 700
        padding 0 4px
        color #000
        &.router-link-active
          color red
          border-bottom 2px solid red
    .img_wrapper
      >img
        width 14px
        height 14px
        position absolute
        top 13px
        right 15px
</style>
