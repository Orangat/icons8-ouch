'use strict'

import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

import api from './api/index'

const state = () => ({
  currentSubject: '',
  currentStyle: '',
  subjects: [],
  styles: [],
  ui: {
    fullScreenMenu: {
      active: false
    },
    search: {
      active: false
    }
  }
})

const store = () => new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    api: api()
  }
})

export default store
