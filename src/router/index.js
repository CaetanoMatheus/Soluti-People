import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!window.localStorage.getItem('token')) next({ name: 'Login' })
    else next()
  } else next()
})

router.beforeEach((to, from, next) => {
  if (to.meta.onlyNotAuth) {
    if (window.localStorage.getItem('token')) next()
    else next(from.fullPath)
  } else next()
})

export default router
