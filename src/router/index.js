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

// eslint-disable-next-line no-unused-vars
router.beforeEach(({name}, from, next) => {
  // 是否需要跳转到 Login 页面
  if (localStorage.getItem("JWT_TOKEN")) {
    if (name === 'Login') {
      next('/');
    } else {
      next();
    }
  } else {
    if (name === 'Login') {
      next();
    } else {
      next({name: 'Login'})
    }
  }
})

export default router
