<template>
  <div>
    <header class="All-header">
      <div class="All-header-top">
        <router-link to="/classify/classify_menu2" @click="$router.back()" class="left">
          <i class="iconfont icon-jiantou2"></i>
        </router-link>
        <span class="center">全部品牌</span>
        <span class="right">
          <i class="iconfont icon-erweima"></i>
        </span>
      </div>
    </header>
    <div class="All-footer">
      <div>
        <span>
          <i class="iconfont icon-shouye1"></i>
        </span>
        <span>首页</span>
      </div>
      <div>
        <span>
          <i class="iconfont icon-wenjianliebiao"></i>
        </span>
        <span>商品分类</span>
      </div>
      <router-link to="/cart" class="cart-wrapper">
        <span>
          <i class="iconfont icon-unie62d">
             <span class="cart-number">0</span>
          </i>
        </span>
        <span>购物车</span>
      </router-link>
      <div>
        <span>
          <i class="iconfont icon-chongwu"></i>
        </span>
        <span>我的E宠</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .All-header
    bottom-border-1px(#909090)
    box-sizing border-box
    height 50px
    line-height 50px
    position relative
    padding 0 10px
    .All-header-top
      display flex
      justify-content space-between
      >span
        text-align center
        &.center
          width 90%
          font-size 18px
        &.right
          text-align right
          >i
            font-size 20px
            color #999
      .left
        text-align left
        >i
         font-size 25px
         color #999
  .All-footer
    box-sizing border-box
    bottom-border-1px(#909090)
    width 100%
    padding 10px 0
    display flex
    justify-content space-around
    >div
      text-align center
      font-size 14px
      color #666
      >span
        >i
          font-size 24px
    .cart-wrapper
      text-align center
      font-size 14px
      color #666
      >span
        color #666
        >i
          font-size 24px
          &.icon-unie62d
            position relative
            left 8px
          .cart-number
            box-sizing border-box
            display inline-block
            position relative
            top -14px
            left -9px
            width 19px
            height 19px
            color #FFF
            background red
            line-height 17px
            border 2px solid red
            font-size 14px
            text-align center
            border-radius 50%

</style>
