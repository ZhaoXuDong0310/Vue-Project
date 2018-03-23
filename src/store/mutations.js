/*
  直接操作state的对象
 */

import {
  RECEIVE_HOMEPAGE,
  RECEIVE_CATEGORYS
} from './mutation-types'

import Vue from 'vue'

export default {
  [RECEIVE_HOMEPAGE] (state, {homepage}) { // 首页商家信息
    state.homepage = homepage
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) { // 分类列表
    state.categorys = categorys
  }
}
