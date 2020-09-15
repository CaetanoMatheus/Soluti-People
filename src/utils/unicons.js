import Vue from 'vue'
import Unicon from 'vue-unicons'
import { uniArrow, uniUser, uniLock } from 'vue-unicons/src/icons'

Unicon.add([uniArrow, uniUser, uniLock])

Vue.use(Unicon, { height: 20, width: 20 })
