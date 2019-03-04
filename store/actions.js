'use strict'

import * as types from './mutation-types'
import axios from 'axios'

const baseURL = process.env.baseURL

const actions = {
  setStyle,
  setSubject,
  nuxtServerInit,
  hideMenu,
  showMenu,
  showSearch,
  hideSearch
}

function setStyle ({ commit }, style) {
  commit(types.STYLE_CHOSEN, style)
}

function setSubject ({ commit }, subject) {
  commit(types.SUBJECT_CHOSEN, subject)
}

// menu
function hideMenu ({ commit }) {
  commit(types.MENU_HIDDEN)
}

function showMenu ({ commit }) {
  commit(types.MENU_SHOWN)
}

// search
function hideSearch ({ commit }) {
  commit(types.SEARCH_HIDDEN)
}

function showSearch ({ commit }) {
  commit(types.SEARCH_SHOWN)
}

function getSubjects () {
  return new Promise((resolve, reject) => {
    const url = 'subjects/'
    axios
      .request({
        url,
        baseURL,
        method: 'get'
      })
      .then(response => {
        const subjects = response.data
        resolve(subjects)
      })
      .catch(reject)
  })
}

function getStyles () {
  return new Promise((resolve, reject) => {
    const url = 'styles/'
    // const key = baseURL + url
    // apiCache.get(key)
    //   .then(data => {
    //     if (data) resolve(data)
    //     else fetch()
    //   })
    //   .catch(fetch)
    fetch()
    function fetch () {
      axios
        .request({
          url,
          baseURL,
          method: 'get'
        })
        .then(response => {
          const styles = response.data
          // apiCache.set(key, styles, 60 * 60 * 2) // 2 hours
          //   .catch(error => {
          //     console.error(`Set apiCache error for key ${key}`, error.message)
          //   })
          resolve(styles)
        })
        .catch(reject)
    }
  })
}

function nuxtServerInit ({ commit }) {
  return new Promise(async (resolve, reject) => {
    try {
      const subjects = await getSubjects()
      commit(types.SUBJECTS_FETCHED, subjects)
      // This is only for header menu dropdown
      const styles = await getStyles()
      commit(types.STYLES_FETCHED, styles)
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

export default actions
