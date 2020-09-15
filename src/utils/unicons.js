import Vue from 'vue'
import Unicon from 'vue-unicons'
import {
  uniArrow,
  uniUser,
  uniLock,
  uniEnvelope,
  uniFilesLandscapesAlt,
  uniCalendarAlt,
  uniAngleRight,
  uniAngleLeft,
  uniPhone,
  uniHome,
  uniTrash,
} from 'vue-unicons/src/icons'

Unicon.add([
  uniArrow,
  uniUser,
  uniEnvelope,
  uniLock,
  uniFilesLandscapesAlt,
  uniCalendarAlt,
  uniAngleRight,
  uniAngleLeft,
  uniPhone,
  uniHome,
  uniTrash,
])

Vue.use(Unicon, { height: 20, width: 20 })
