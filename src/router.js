import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    // 有子路由不需要name属性
    // name: 'index',
    component: () => import('./views/index.vue'),
    children: [
      // 默认路由
      {
        path: '',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('./views/Home.vue')
      },
      {
        path: '/bigfoison',
        name: 'bigfoison',
        component: () => import('./views/BigFoison.vue')
      },
      {
        path: '/biggrowup',
        name: 'biggrowup',
        component: () => import('./views/BigGrowUp.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('./views/Mine.vue'),
      },
      {
        path: '/mine/memberinfo',
        name: 'memberinfo',
        component: () => import('./views/MineMemberInfo.vue')
      }
    ]
  }]
})