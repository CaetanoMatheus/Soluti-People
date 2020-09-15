import Vue from 'vue'
import VueTheMask from 'vue-the-mask'

import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/utils/unicons'

import '@/styles/global.scss'

require('@/utils/filters')

Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
