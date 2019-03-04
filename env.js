'use strict'

const port = process.env.PORT || 3040

const env = {
  default: {
    port,
    project: 'ouch',
    baseURL: 'https://api-ouch.icons8.com/api/v1/'
  },
  dev: {
    staticUrl: 'https://dev.icons8.com'
  },
  production: {
    staticUrl: 'https://maxst.icons8.com'
  }
}

module.exports = env
