<template>
  <div>
    <div class="classify">
      <div class="menu-wrapper">
        <ul class="menu-wrapper-list">
          <li :class="{on: indexs === index}" v-for="(category, index) in categorys"
              :key="index" @click="getMenu(index)">
            <span>{{category.name}}</span>
          </li>
        </ul>
      </div>
      <div class="list-wrapper">
        <div class="hot-classify-item" v-if="categorys[indexs]">
          <div class="hot-item" v-for="(cate, index) in categorys[indexs].cate_list" :key="index">
            <a href="javascript:">{{cate.title}}</a>
            <ul class="hot-item-img" >
              <li v-for="(item, index) in cate.list" :key="index">
                <div>
                  <img :src="item.photo || item.logo">
                </div>
                <p>{{item.name}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import {mapState} from 'vuex'

  import BScroll from 'better-scroll'
  export default {

    data () {
      return {
        indexs: 0
      }
    },

    mounted () {
      this.$store.dispatch('getCategorys')
    },

    watch: {
      categorys () {
        this.$nextTick(() => {
          let scroll = new BScroll('.menu-wrapper', {
            scrollY: true,
            click: true
          })
          let scroll2 = new BScroll('.list-wrapper', {
            scrollY: true,
            click: true
          })
        })
      }
    },

    computed: {
      ...mapState(['categorys'])
    },

    methods: {
      getMenu (index) {
        this.indexs = index
        console.log(index);
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .classify
    display flex
    position absolute
    top 50px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      width 70px
      box-sizing border-box
      border-right 5px solid #f3f4f5
      .menu-wrapper-list
        >li
          box-sizing border-box
          height: 50px;
          width: 70px;
          padding: 15px 0
          line-height: 14px;
          text-align center
          >span
            font-size 13px
        .on
          color #ed4044
          background #f3f4f5
  .list-wrapper
    box-sizing border-box
    border-top 5px solid #f3f4f5
    >.hot-classify-item
      >.hot-item
        box-sizing border-box
        padding 5px 5px 20px
        >a
          box-sizing border-box
          display block
          font-size 12px
          color #7e8c8d
          padding-left 5px
          margin-top 10px
        >.hot-item-img
          display flex
          flex-wrap wrap
          >li
            width 33.33%
            box-sizing border-box
            margin-top 10px
            padding 0 5px
            >div
              >img
                width 100%
            >p
              text-align center
              font-size 13px
              color #666
</style>
