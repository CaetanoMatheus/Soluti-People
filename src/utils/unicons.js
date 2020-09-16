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
  uniPlus,
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
  uniPlus,
])

Vue.use(Unicon, { height: 20, width: 20 })
