export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login-page" */ '@/pages/Auth'),
    meta: { onlyNotAuth: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register-page" */ '@/pages/Auth'),
    meta: { onlyNotAuth: true },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home-page" */ '@/pages/Home'),
    meta: { requiresAuth: true },
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit-page" */ '@/pages/Edit'),
    meta: { requiresAuth: true },
  },
]
