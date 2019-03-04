'use strict'

const defaultConfig = require('icons8-common/src/nuxt.defaults')
const config = Object.assign({}, defaultConfig)

config.css = [
  { src: './assets/css/public.scss', lang: 'scss' }
]

config.plugins = [
  '~plugins/components'
]

config.modules = [
  'icons8-common/src/module.js'
]

config.favicon = [
  { size: 16, src: '/vue-static/ouch/favs/ouch_fav_16x16.png' },
  { size: 32, src: '/vue-static/ouch/favs/ouch_fav_32x32.png' },
  { size: 96, src: '/vue-static/ouch/favs/ouch_fav_96x96.png' },
  { size: 196, src: '/vue-static/ouch/favs/ouch_fav_196x196.png' }
]

module.exports = config
