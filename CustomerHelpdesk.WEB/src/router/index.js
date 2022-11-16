import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Layout,
      redirect:"/index",
      children: [{//子菜单信息
        path: '/index',//路径
        name: 'index',
        component: () => import('@/views/index'),//指定组件
        meta: { title: '首页', access: 0, affix: true }
      }]
    },
    {
      path: '/CustomerService/MessageList',
      component:Layout,
      redirect:"/CustomerService/MessageList",
      children: [{//子菜单信息
        path: '/CustomerService/MessageList',//路径
        name: 'customerService_messageList',
        component: () => import('@/views/customerService/messageList/messageList.vue'),//指定组件
        meta: { title: '客户会话', access: 0, affix: true }
      }]
    }
  ]
})
