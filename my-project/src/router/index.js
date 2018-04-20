import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/common'
import item from '../page/item'
import Home from '../page/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/item',
      name: 'item',
      component: item
    }
  ]
})
