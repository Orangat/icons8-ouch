import Vue from 'vue'

import appOuchLogo from '../components/appOuchLogo'
import appOuchMenu from '../components/appOuchMenu.vue'
import appIllustration from '../components/appIllustration.vue'
import appStyle from '../components/appStyle.vue'
import appSubjects from '../components/appSubjects.vue'
import media from '../components/media.vue'
import buy from '../components/buy.vue'
import search from '../components/search.vue'
import illustrationDescription from '../components/illustrationDescription.vue'
import similarIllustrations from '../components/similarIllustrations.vue'
import stylesToCheck from '../components/stylesToCheck.vue'
import downloadIllustrationModal from '../components/downloadIllustrationModal.vue'
import shareLinkModal from '../components/shareLinkModal.vue'
import fullScreenMenu from '../components/fullScreenMenu.vue'

/* eslint-disable no-unused-vars */
import illustrationPage from '../pages/ouch/illustration/_illustration.vue'
import searchPage from '../pages/ouch/search/_searchQuery.vue'
import stylePage from '../pages/ouch/style/_style.vue'
import subjectPage from '../pages/ouch/subject/_subject.vue'
import tagPage from '../pages/ouch/tag/_tag.vue'
import indexPage from '../pages/ouch/index.vue'

export default () => {
  Vue.component('app-ouch-logo', appOuchLogo)
  Vue.component('app-ouch-menu', appOuchMenu)
  Vue.component('media', media)
  Vue.component('buy', buy)
  Vue.component('app-illustration', appIllustration)
  Vue.component('app-style', appStyle)
  Vue.component('app-subjects', appSubjects)
  Vue.component('search', search)
  Vue.component('illustrationDescription', illustrationDescription)
  Vue.component('similarIllustrations', similarIllustrations)
  Vue.component('styles-to-check', stylesToCheck)
  Vue.component('download-illustration-modal', downloadIllustrationModal)
  Vue.component('share-link-modal', shareLinkModal)
  Vue.component('full-screen-menu', fullScreenMenu)
}
