'use script'

import * as types from './mutation-types'

export default {
  [types.STYLE_CHOSEN] (state, style) {
    state.currentStyle = style
  },
  [types.SUBJECT_CHOSEN] (state, subject) {
    state.currentSubject = subject
  },
  [types.SUBJECTS_FETCHED] (state, subjects) {
    state.subjects = subjects
  },
  [types.STYLES_FETCHED] (state, styles) {
    state.styles = styles
  },
  [types.MENU_SHOWN] (state) {
    state.ui.fullScreenMenu.active = true
  },
  [types.MENU_HIDDEN] (state) {
    state.ui.fullScreenMenu.active = false
  },
  [types.SEARCH_SHOWN] (state) {
    state.ui.search.active = true
  },
  [types.SEARCH_HIDDEN] (state) {
    state.ui.search.active = false
  }
}
