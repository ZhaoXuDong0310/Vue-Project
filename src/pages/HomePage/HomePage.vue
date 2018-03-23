<template>
  <div class="home">
    <div class="home_baby swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in homepage.dog_banner" :key="index">
          <img src="./images/banner1.jpg">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="home_list_wrapper">
      <ul class="home_list">
        <li v-for="(list, index) in homepage.menu_list" :key="index">
          <img :src="list">
        </li>
      </ul>
    </div>
    <div class="xrzx">
      <img src="./images/新人专享.gif" alt="">
    </div>
    <div class="mrfq">
      <div class="mrfq_top">
        <div class="mrfq_img">
          <img src="./images/mrfq.png" alt="">
        </div>
        <div class="xiayichang">下一场开始</div>
        <div class="time">
          <span class="time_1">22</span>
          <span class="time_2">:</span>
          <span class="time_1">00</span>
        </div>
        <div class="more">
          <a href="javascript:">
            <img src="./images/more.png" alt="">
          </a>
        </div>
      </div>
      <div class="mrfq_bottom_wrapper">
        <div class="mrfq_bottom swiper-container">
          <div class="swiper-wrapper">
            <div class="zxd_gym swiper-slide" style="width: 98px; margin-right: 10px">
              <div class="mrfq_classify">
                <div class="mrfq_classify_img">
                  <img src="./images/classify1.jpg" alt="">
                </div>
                <div class="mrfq_classify_price">
                  <span class="left">￥</span>
                  <span class="right">3.90</span>
                </div>
                <p class="mrfq_classify_description">省35.10</p>
              </div>
            </div>
            <div class="zxd_gym swiper-slide" style="width: 98px; margin-right: 10px">
              <div class="mrfq_classify">
                <div class="mrfq_classify_img">
                  <img src="./images/classify1.jpg" alt="">
                </div>
                <div class="mrfq_classify_price">
                  <span class="left">￥</span>
                  <span class="right">3.90</span>
                </div>
                <p class="mrfq_classify_description">省35.10</p>
              </div>
            </div>
            <div class="zxd_gym swiper-slide" style="width: 98px; margin-right: 10px">
              <div class="mrfq_classify">
                <div class="mrfq_classify_img">
                  <img src="./images/classify1.jpg" alt="">
                </div>
                <div class="mrfq_classify_price">
                  <span class="left">￥</span>
                  <span class="right">3.90</span>
                </div>
                <p class="mrfq_classify_description">省35.10</p>
              </div>
            </div>
            <div class="zxd_gym swiper-slide" style="width: 98px; margin-right: 10px">
              <div class="mrfq_classify">
                <div class="mrfq_classify_img">
                  <img src="./images/classify1.jpg" alt="">
                </div>
                <div class="mrfq_classify_price">
                  <span class="left">￥</span>
                  <span class="right">3.90</span>
                </div>
                <p class="mrfq_classify_description">省35.10</p>
              </div>
            </div>
            <div class="zxd_gym swiper-slide" style="width: 98px; margin-right: 10px">
              <div class="mrfq_classify">
                <div class="mrfq_classify_img">
                  <img src="./images/classify1.jpg" alt="">
                </div>
                <div class="mrfq_classify_price">
                  <span class="left">￥</span>
                  <span class="right">3.90</span>
                </div>
                <p class="mrfq_classify_description">省35.10</p>
              </div>
            </div>
            <div class="zxd_gym swiper-slide" style="width: 98px; margin-right: 10px">
              <div class="mrfq_classify">
                <div class="mrfq_classify_img">
                  <img src="./images/classify1.jpg" alt="">
                </div>
                <div class="mrfq_classify_price">
                  <span class="left">￥</span>
                  <span class="right">3.90</span>
                </div>
                <p class="mrfq_classify_description">省35.10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ecgj">
      <div class="ecgj_left">
        <img src="./images/E1.jpg" alt="">
      </div>
      <div class="ecgj_right">
        <div class="top">
          <img src="./images/E2.jpg" alt="">
        </div>
        <div class="bottom">
          <img src="./images/E3.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="sb_img">
      <img src="./images/E555.jpg" alt="">
    </div>
    <div class="blank"></div>
    <div class="sb_sp">
      <div class="sb_sp_left">
        <img src="./images/sp.jpg" alt="">
      </div>
      <div class="sb_sp_right">
        <img src="./images/more.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import {mapState} from 'vuex'
  export default {

    watch: {
      homepage () { // 当前状态发生改变，但是界面还没有更新
        this.$nextTick(() => { // 当前这次改变了状态的界面更新一完成就调用
          let swiper1 = new Swiper('.home_baby.swiper-container', {
            pagination: {
              el: '.home_baby .swiper-pagination',
              dynamicBullets: true
            },
            autoplay: {
              delay: 1500,
              disableOnInteraction: false
            },
            loop: true
          })
          let swiper2 = new Swiper('.mrfq_bottom.swiper-container', {
            slidesPerViw: 'auto'
          })
        })
      }
    },

    computed: {
      ...mapState(['homepage'])
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    position relative
  .swiper-container
    width 100%
    height 160px
    bottom-border-1px(#666)
    .swiper-wrapper
      .swiper-slide
        width 100%
        height 100%
        >img
          width 100%
          height 100%
  .home_list_wrapper
    .home_list
      display flex
      flex-wrap wrap
      >li
        width 20%
        >img
          width 75px
          height 90px
  .xrzx
    >img
      width 100%
      height 120px
  .mrfq
    .mrfq_top
      padding 10px
      position relative
      .mrfq_img
        float left
        >img
          width 85px
      .xiayichang
        position absolute
        right 107px
        margin-right 5px
        margin-left 10px
        font-size 13px
      .time
        display flex
        position absolute
        right 55px
        .time_1
          border 1px solid #ddd
          padding 1px 2px
          font-size 13px
        .time_2
          font-size 12px
          margin 0 3px
          font-weight 600

      .more
        position absolute
        right -75px
        top 0
        >a
          >img
            width 50%
            margin 0 0 0 auto
    .mrfq_bottom_wrapper
      padding-left 5px
      margin-bottom 10px
      .mrfq_bottom
        .swiper-wrapper
          .swiper-slide
            width 98px !important
            .mrfq_classify
              margin  0 7px
              .mrfq_classify_img
                position relative
                padding-top 100%
                >img
                  display block
                  width 100%
                  position absolute
                  left 0
                  top 0
              .mrfq_classify_price
                display flex
                justify-content center
                >span
                  color red
                  font-size 12px
              .mrfq_classify_description
                text-align center
                color #999
                font-size 12px
  .ecgj
    display flex
    .ecgj_left
      width 50%
      >img
        width 100%
        height 250px
    .ecgj_right
      width 50%
      .top
        >img
          display block
          width 100%
          height 125px
      .bottom
        >img
          display block
          width 100%
          height 125px

  .blank
    width 100%
    height 10px
    background #f3f4f5
  .sb_img
    width 100%
    >img
      width 100%
      height 160px
  .sb_sp
    position relative
    .sb_sp_left
      >img
        width 100%
        height 160px
    .sb_sp_right
      position absolute
      top 0
      right -19px
      >img
       width 100px
  </style>
