import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage/HomePage.vue'
import Classify from '../pages/Classify/Classify.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Classify_menu1 from '../pages/Classify/Classify_menu1/Classify_menu1.vue'
import Classify_menu2 from '../pages/Classify/Classify_menu2/Classify_menu2.vue'
import All from '../pages/All/All.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect: '/homepage'
    },

    {
      path: '/homepage',
      component: HomePage,
      meta: {
        showFooter: true,
        showHeader: true
      }
    },

    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      },
      children: [
        {
          path: '/classify/classify_menu1',
          component: Classify_menu1,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/classify/classify_menu2',
          component: Classify_menu2,
          meta: {
            showFooter: true
          }
        },
        {
          path: '',
          redirect: '/classify/classify_menu1'
        }
      ]
    },

    {
      path: '/all',
      component: All
    },

    {
      path: '/cart',
      component: Cart
    },

    {
      path: '/personal',
      component: Personal
    }
  ]
})
