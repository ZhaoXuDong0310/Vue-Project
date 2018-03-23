/*
 触发mutation调用间接更新state数据的对象
 */

import {
  reqHomepage,
  reqClassifyMenu1
} from '../api'

import {
  RECEIVE_HOMEPAGE,
  RECEIVE_CATEGORYS
} from './mutation-types'

export default {

  // 异步获取商家信息
  async getHomepage ({commit}, callback) {
    const result = await reqHomepage()
    if (result.code === 0) {
      commit(RECEIVE_HOMEPAGE, {homepage: result.data})
      callback && callback()
    }
  },

  // 异步获取分类列表数据信息
  async getCategorys ({commit}, callback) {
    const result = await reqClassifyMenu1()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYS, {categorys: result.data})
      callback && callback()
    }
  }

}
