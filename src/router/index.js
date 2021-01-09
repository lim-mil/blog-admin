import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Layout'),
    children: [
      {
        path: 'analysis',
        name: 'Analysis',
        component: () => import('../views/Analysis')
      },
      {
        path: 'blog/posts',
        name: 'BlogPosts',
        component: () => import('../views/BlogPosts')
      },
      {
        path: 'blog/categories',
        name: 'BlogCategory',
        component: () => import('../views/BlogCategories')
      },
      {
        path: 'project/projects',
        name: 'ProjectPorjects',
        component: () => import('../views/ProjectProjects')
      },
      {
        path: 'project/categories',
        name: 'ProjectCategories',
        component: () => import('../views/ProjectCategories')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
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
