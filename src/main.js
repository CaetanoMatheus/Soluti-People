import Vue from 'vue'
import VueTheMask from 'vue-the-mask'
import VueSmoothScroll from 'vue2-smooth-scroll'

import App from '@/App'
import router from '@/router'
import store from '@/store'
import Swal from '@/utils/sweetAlert'
import '@/utils/unicons'

import '@/styles/global.scss'

require('@/utils/filters')

window.Swal = Swal
Vue.use(VueTheMask)
Vue.use(VueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
