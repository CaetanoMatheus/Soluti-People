export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home-page" */ '@/pages/Home'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login-page" */ '@/pages/Auth'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register-page" */ '@/pages/Auth'),
  },
]
