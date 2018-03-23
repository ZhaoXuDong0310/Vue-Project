/*
  作用：模拟数据,拦截ajax请求返回对应的随机数据
  引入数据，拦截ajax请求返回对应的随机数据
 */
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/classify/classify_menu1', {code: 0, data: data.categorys}) // 分类列表数据
Mock.mock('/classify/classify_menu2', {code: 0, data: data.brand}) // 品牌列表数据
Mock.mock('/homepage', {code: 0, data: data.homepage}) // 首页列表数据
Mock.mock('/all', {code: 0, data: data.allbrands}) // 全部品牌详情列表信息

// 请求路径必须与ajax请求中定义的路径一一对应
