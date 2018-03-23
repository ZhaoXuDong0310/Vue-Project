<template>
  <div>
    <header class="personal-header">
      <div class="bg">
        <div class="bg-top">
          <router-link to="classify/classify_menu2" @click="$router.back()" class="gogogo">
            <i class="iconfont icon-jiantou2"></i>
          </router-link>
          <span class="zhuce">注册</span>
        </div>
        <div class="bg-center">
          <img src="./images/logo.png" alt="">
        </div>
        <div class="gb-bottom">
          <div class="bottom-left">
            <span>普通登录</span>
            <i class="iconfont icon-jiantou"></i>
          </div>
          <div class="bottom-right">
            <span>手机动态密码登录</span>
          </div>
        </div>
      </div>
    </header>
    <div class="personal-home">
      <div class="home-user">
        <div class="user-wrapper">
          <form action>
            <div>
              <i class="iconfont icon-iconset0203"></i>
              <input type="text" placeholder="手机号/邮箱/用户名">
            </div>
            <div>
              <i class="iconfont icon-iconset0114"></i>
              <input type="password" placeholder="输入密码">
            </div>
          </form>
        </div>
      </div>
      <div class="home-help">忘记密码？</div>
      <div class="home-login">
        <div>登录</div>
      </div>
      <div class="home-blank"></div>
      <div class="home-partner">
        <p>合作网站登录</p>
        <div class="partner">
          <div>
            <img src="./images/zhifubao.png" alt="">
          </div>
          <div>
            <img src="./images/qq.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .personal-header
    .bg
      background-image url("./images/bg.png")
      background-repeat no-repeat
      background-size 100% 100%
      .bg-top
        box-sizing border-box
        padding 0 12px
        display flex
        justify-content space-around
        height 50px
        line-height 50px
        >span
          flex 1
          color #FFF
          &.zhuce
            text-align right
        .gogogo
          color #FFF
          .icon-jiantou2
            font-size 25px
      .bg-center
        box-sizing border-box
        padding 12px 0 24px 0
        >img
          display block
          margin auto
          width 20%
      .gb-bottom
        display flex
        background rgba(255,255,255,.3)
        >div
          flex 1
          text-align center
          &.bottom-left
            position relative
            >i
              position absolute
              top 20px
              left 79px
              font-size 28px
              color #FFF
          >span
            height 43px
            line-height 43px
            color #FFFF
  .personal-home
    .home-user
      box-sizing border-box
      padding 0 6px
      margin 0 15px 12px 15px
      border-radius 6px
      .user-wrapper
        >form
          >div
            box-sizing border-box
            border-bottom 1px solid #e2e2e2
            display flex
            padding 12px 0 12px 30px
            position relative
            color #6666
            >i
              font-size 24px
              margin-left -32px
            >input
              display block
              height 21px
              width 100%
              font-size 15px
              color #666
              position absolute
              top 21px
              outline none
              &::-webkit-input-placeholder
                color #6666

    .home-help
      box-sizing border-box
      padding 0 24px
      text-align right
      font-size 14px
      color #666
    .home-login
      box-sizing border-box
      padding-top 6px
      >div
        box-sizing border-box
        padding 9px 0
        text-align center
        margin 0 15px
        letter-spacing 5px // 控制文字间距
        font-size 15px
        background lightblue
        border-radius 10px
        color #FFF
    .home-blank
      height 120px
    .home-partner
      >p
        text-align center
        color #d7d7d7
        margin-top 8px
      .partner
        display flex
        box-sizing border-box
        padding 18px 0
        >div
          box-sizing border-box
          width 33.33%
          padding 0 14.4px
          >img
            width 60px
</style>
