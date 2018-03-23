###
    Vue实战项目 - E宠商城
    
    day01
      
      完成功能：
        
        1.完善JQuery项目分页效果功能
        2.接手vue项目，搭建路由
        
      疑难杂症：
        暂无
        
###
    开启Vue实战项目
        
        第一步：技术选型 {
          
          1.前台数据处理/交互/组件化
              
              Vue全家桶 {
                Vue
                vue-router
                vuex
              }
          
          2.项目构建/工程化 {
            vue-cli
            eslint
          }
          
          3.css预编译器 {
            stylus
          }
        
        }
        
        第二步：创建路由以及对应的路由组件
          
          1.首页路由组件 - HomePage
          2.分类路由组件 - Classify
          3.购物车路由组件 - Cart
          4.我的E宠路由组件 - Personal
        
        第三步：定义页脚点击切换路由的组件 - Footer
          
          1.通过编程式导航实现路由切换 - $router
          2.通过动态class和$route.path实现tab样式切换  
            示例：
              1.在实现路由切换的标签上添加@click事件 @click = "goto('/homepage')"
              2.定义methods方法执行指定事件 goto(path){this.$router.replace(path)} 
    
    Swiper使用小技巧
      给父元素上添加类名或ID，操作新添加的选择器，一个页面中多个Swiper就不会相互影响  
      
    使用mockjs拦截ajax请求，返回随机数据
    定义接口！！！！  
    
    scoped - 限制class样式只在当前组件生效(慎用！！！)
    
                   
    页面马上构建完成，各个路由也已搭建完毕，暂未遇到棘手的问题，
    通过这几天的练习了解到了 better-scroll的一切基本用法，挺好用的，个人感觉，还有就是此次布局大多数采用了flex和position的方式
    更加进一步的去清晰认识了解到了flex的强大以及一些踩到的坑。。。
    
    
    页面已全部搭建完毕，路由也准备就绪，数据也已获得，开始定义接口！！！
    1.使用 mockjs拦截ajax请求返回随机数据
        1-1.下载mockjs
              npm install mockjs --save
        1-2.创建mockjs文件
              作用：模拟数据
              引入 mockjs - import Mock from 'mockjs' 
              引入数据(data.json)
        1-3.模拟数据 - 定义接口
               Mock.mock('/classify/classify_menu1', {code: 0, data: data.categorys})
               注意：路径名必须与发送ajxa请求中的路径一一对应
              
    2.使用axios封装ajax发送请求的模块
    3.引入封装了ajax发送请求的模块并发送请求获取数据
        示例:
          获取分类列表信息
          export const reqClassifyMenu1 = () => ajax('/classify/classify_menu1')
        注意：此路径必须与mockjs中模拟数据中的接口一一对应
    4.在main.js中引入mockjs，这样就可以访问其内部定义好的接口
        注意：此模块直接引入即可
        示例：import './mock/mockServer'
    5.下载vuex - 使用vuex管理状态
        npm install --save vuex
    6.建立vuex管理的对应的模块
        store.js - vuex最核心管理对象
        state - 保存状态数据的state对象
        actions - 触发mutation调用间接更新state数据的对象
        mutations - 直接操作state的对象
        mutation-types - 定义了mutation常亮名称的模块
        getters - state的计算属性getter的对象
    7.注册store    
    8.在组件中分发action获取数据信息
        示例：
          mounted(){
            this.$store.dispatch('xxxx') 注意：名称一定要与分发的action中的方法名一一对应
          }
    9.在action中接收组件派发的action信息
        1-1.引入api中发送ajxa请求的数据
          示例：import reqHomepage from '../api'
        1-2.引入mutation-types中对应的mutation常亮名称
          示例：import RECEIVE_HOMEPAGE from './mutation-types'
        1-3.异步获取信息并调用commit触发mutation
          示例：
                异步获取商家信息
                async getHomepage ({commit}) {
                  const result = await reqHomepage()
                  if (result.code === 0) {
                    commit(RECEIVE_HOMEPAGE)
                  }
                }
    10.在获取到数据之后如果有多维数组，可以使用通过下标的方式来获取目标元素
          示例：
              v-for="(cate, index) in categorys[indexs].cate_list" :key="index"
       在遍历元素的父元素标签中可以使用 v-if来判断有没有获取到当前数据
          示例：
              <div class="hot-classify-item" v-if="categorys[indexs]">
                  <div class="hot-item" v-for="(cate, index) in categorys[indexs].cate_list" :key="index">
              <div/>       
