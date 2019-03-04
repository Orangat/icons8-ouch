'use strict'

import axios from 'axios'

const USER_SET = 'USER_SET'
const LOADING_ENDED = 'LOADING_ENDED'
const LOADING_STARTED = 'LOADING_STARTED'

const state = () => ({
  user: null,
  userLoading: true
})

const mutations = {
  [USER_SET] (state, user) {
    state.user = user
    state.userLoading = false
  },
  [LOADING_ENDED] (state) {
    state.userLoading = false
  },
  [LOADING_STARTED] (state) {
    state.userLoading = true
  }
}

const actions = {
  getIllustrationsPreviewsForStyle,
  getIllustrationsPreviewsForSubject,
  getIllustrationsPreviewsForTag,
  searchIllustrations,
  getFullIllustration,
  getUser,
  userSet,
  syncUser,
  loadingStarted
}
const baseURL = process.env.baseURL
function getUser ({ commit }) {
  return new Promise(function (resolve) {
    axios
      .request({
        url: 'auth/current/',
        method: 'get',
        baseURL,
        withCredentials: true
      })
      .then(response => {
        let user = response.data
        resolve(user)
      })
      .catch(error => {
        commit(LOADING_ENDED)
        console.log(error)
        resolve()
      })
  })
}

function syncUser () {
  return new Promise(function (resolve) {
    axios
      .request({
        url: 'auth/current?sync=1/',
        method: 'get',
        baseURL,
        withCredentials: true
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  })
}

function loadingStarted ({ commit }) {
  commit(LOADING_STARTED)
}

function userSet ({ commit }, user) {
  return new Promise(function (resolve) {
    commit(USER_SET, user)
    commit(LOADING_ENDED)
    resolve()
  })
}

function getIllustrationsPreviewsForStyle ({ rootState }, { styleId, page = 1, perPage = 50 }) {
  return new Promise((resolve, reject) => {
    const url = 'illustrations/'
    const params = {
      style_pretty_ids: styleId,
      page,
      per_page: perPage,
      fields: 'id,pretty_id,styles(pretty_id),thumb1x(url,height),thumb2x(url,height)'
    }
    axios
      .request({
        url,
        baseURL,
        method: 'get',
        params
      })
      .then(response => {
        const previews = response.data.illustrations
        resolve(previews)
      })
      .catch(reject)
  })
}

function getIllustrationsPreviewsForSubject ({ rootState }, { subjectId, page = 1, perPage = 50 }) {
  return new Promise((resolve, reject) => {
    const url = 'illustrations/'
    const params = {
      subject_pretty_ids: subjectId,
      page,
      per_page: perPage,
      fields: 'id,pretty_id,styles(pretty_id),thumb1x(url,height),thumb2x(url,height)'
    }
    axios
      .request({
        url,
        baseURL,
        params
      })
      .then(response => {
        const previews = response.data.illustrations
        resolve(previews)
      })
      .catch(reject)
  })
}

function getIllustrationsPreviewsForTag ({ rootState }, { tagId, page = 1, perPage = 50 }) {
  return new Promise((resolve, reject) => {
    const url = 'illustrations/'
    const params = {
      tag_pretty_ids: tagId,
      page,
      per_page: perPage,
      fields: 'id,pretty_id,styles(pretty_id),thumb1x(url,height),thumb2x(url,height)'
    }
    axios
      .request({
        url,
        baseURL,
        params
      })
      .then(response => {
        const previews = response.data.illustrations
        resolve(previews)
      })
      .catch(reject)
  })
}

function getFullIllustration ({ rootState }, { prettyId, page = 1, perPage = 50 }) {
  return new Promise((resolve, reject) => {
    const url = 'illustrations/'
    const params = {
      pretty_ids: prettyId,
      page,
      per_page: perPage
    }
    axios
      .request({
        url,
        baseURL,
        params
      })
      .then(response => {
        const illustration = response.data.illustrations[0]
        resolve(illustration)
      })
      .catch(reject)
  })
}

function searchIllustrations ({ rootState }, { searchQuery, page = 1, perPage = 50 }) {
  return new Promise((resolve, reject) => {
    const url = 'illustrations/'
    const params = {
      search: searchQuery,
      page,
      per_page: perPage,
      fields: 'id,pretty_id,thumb1x(url,height),thumb2x(url,height),styles(pretty_id)'
    }
    axios
      .request({
        url,
        baseURL,
        params
      })
      .then(response => {
        const previews = response.data.illustrations
        resolve(previews)
      })
      .catch(reject)
  })
}

const store = () => ({
  state,
  mutations,
  actions
})

export default store
