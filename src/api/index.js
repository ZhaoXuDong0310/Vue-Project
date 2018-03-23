/*
  通过ajax请求获取数据，在浏览器端动态构建界面展现数据
 */

// 引入封装了ajax发送请求的模块
import ajax from './ajax'


// 获取首页信息
export const reqHomepage = () => ajax('/homepage')

// 获取分类列表信息
export const reqClassifyMenu1 = () => ajax('/classify/classify_menu1')

// 获取分类中品牌列表
export const reqClassifyMenu2 = () => ajax('/classify/classify_menu2')

// 获取品牌全部列表详情
export const reqAll = () => ajax('/all')
