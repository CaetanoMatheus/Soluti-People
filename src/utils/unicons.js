import Vue from 'vue'
import Unicon from 'vue-unicons'
import {
  uniArrow, uniUser, uniLock, uniEnvelope, uniFilesLandscapesAlt, uniCalendarAlt,
} from 'vue-unicons/src/icons'

Unicon.add([uniArrow, uniUser, uniEnvelope, uniLock, uniFilesLandscapesAlt, uniCalendarAlt])

Vue.use(Unicon, { height: 20, width: 20 })
