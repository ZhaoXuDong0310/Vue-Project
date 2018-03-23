<template>
  <div id="app">
    <Header v-show="$route.meta.showHeader"/>
    <router-view/>
    <Footer  v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>

  import Footer from './components/Footer/Footer.vue'
  import Header from './components/Header/Header.vue'

  export default {

    mounted () {
      this.$store.dispatch('getHomepage') // 获取商家数据信息
    },

    // 将Footer映射为组件标签
    components: {
      Footer,
      Header
    }

  }
</script>

<style>

</style>
