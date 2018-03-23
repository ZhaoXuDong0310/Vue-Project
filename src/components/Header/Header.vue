<template>
  <div id="header">
    <div class="header_wrapper">
      <div class="header_top">
        <div class="header_top_wrap">
          <div class="header_top_left">
            <span>狗狗</span>
            <span>|</span>
            <span>重庆</span>
            <i class="iconfont icon-xiangxia"></i>
          </div>
          <p class="header_top_p">
            <input type="text" placeholder="搜索商品和品牌" disabled="disabled">
            <i class="iconfont icon-sousuosearch82"></i>
          </p>
          <span>
          <i class="iconfont icon-xinxi"></i>
        </span>
        </div>
      </div>
    </div>
    <div class="header_baby swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(menu, index) in homepage.menus" :key="index">
          <p class="on">{{menu.menu_name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import {mapState} from 'vuex'

  import Swiper from 'swiper'
  export default {
    mounted () {
      let swiper = new Swiper (' .header_baby', {

      })
    },

    computed: {
      ...mapState(['homepage'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    height 100%
    background #ffffff
    line-height 1.6
    font-family 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif
  #header
    width 100%
    max-width 640px
    height 86px
    margin auto
    .header_top
      box-sizing border-box
      padding 5px 10px
      .header_top_wrap
        box-sizing border-box
        width 100%
        padding 8px 0
        background #fff
        display flex
        justify-content space-between
        .header_top_left
          display flex
          /*justify-content space-between*/
          color #898989
          position relative
          margin-top 3px
          >span
            font-size 14px
            margin-left 5px
          >i
            font-size 12px
            position absolute
            right -13px
            top 3px
        .header_top_p
          position relative
          left 5px
          >input
            width 233px
            height 25px
            font-size 13px
            text-indent 10px
            outline none
            background #e9e9e9
            border-radius 4px
            color #bcbcbc
          >i
            display block
            width 11px
            height 11px
            position absolute
            right 5px
            top 2px
            margin auto 0
        >span
          >i
            color #898989
            font-size 18px
            position absolute
            right 11px
    .header_baby
      width 100%
      .swiper-wrapper
        display flex
        .swiper-slide
          width 74px
          height 36px
          margin-right  5px
          position relative
          display flex
          white-space nowrap
          >p
            margin-left 30px
          .on
            color $bc
</style>
