import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
]
let fappRoutes = routes;
const prefix = '/microFapp';
if (window.__POWERED_BY_QIANKUN__) {
  fappRoutes = routes.map(route => {
    let path = route.path
    return {
      ...route,
      path: prefix + path
    }
  })
}
const router = new VueRouter({
  mode: 'hash',
  routes: fappRoutes
})


router.beforeEach((to, from, next) => {
  if (window.__POWERED_BY_QIANKUN__) {
    if (!to.path.startsWith(prefix)) {
      next({
        path: prefix + to.path
      })
    } else {
      next()
    }
  } else {
    next()
  }
  // if (window.__POWERED_BY_QIANKUN__) {
  //   // 子应用之间跳转
  //   if (to.fullPath.startsWith('/micro') && !to.path.startsWith(prefix)) {
  //     location.href = location.origin + '#' + to.fullPath;
  //   } else if (!to.path.startsWith(prefix)) {
  //     next({
  //       path: prefix + to.path
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }
})

export default router