import Vue from 'vue'
import Unicon from 'vue-unicons'
import {
  uniArrow, uniUser, uniLock, uniEnvelope,
} from 'vue-unicons/src/icons'

Unicon.add([uniArrow, uniUser, uniEnvelope, uniLock])

Vue.use(Unicon, { height: 20, width: 20 })
