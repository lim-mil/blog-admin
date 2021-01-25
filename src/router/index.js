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
        path: 'posts',
        name: 'Posts',
        component: () => import('../views/Posts')
      },
      {
        path: 'posts/categories',
        name: 'PostCategories',
        component: () => import('../views/PostCategories')
      },
      {
        path: 'posts/:post_id',
        name: 'EditPost',
        component: () => import('../views/EditPost')
      },
      {
        path: 'posts/categories/:post_category_id',
        name: 'EditPostCategory',
        component: () => import("../views/EditPostCategory")
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('../views/Projects')
      },
      {
        path: 'projects/categories',
        name: 'ProjectCategories',
        component: () => import('../views/ProjectCategories')
      },
      {
        path: "projects/:project_id",
        name: "EditProject",
        component: () => import("../views/EditProject")
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
