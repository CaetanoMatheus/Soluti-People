import Vue from 'vue'
import Moment from 'moment'

Moment.locale('pt-BR')
Vue.filter('formatDate', (value) => Moment(value).format('LL'))

Vue.filter('formatCPF', (value) => value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'))
