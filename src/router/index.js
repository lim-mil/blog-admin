import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Analysis')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Layout'),
    children: [
      {
        path: 'post',
        component: () => import('../views/BlogPost')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
