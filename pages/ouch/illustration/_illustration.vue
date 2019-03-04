<template lang="pug">
  .illustration
    section.page-section.menu-section
      app-ouch-menu
    section.illustration-section
      illustration-description(:illustration="fullIllustration")
    section
      similar-illustrations(:illustrations="similarIllustrations" :currentStyle="fullIllustration.styles[0].pretty_id")
    section.check-style
      .container
        styles-to-check(:styles="stylesToCheck")
</template>

<script>
import utils from '../../../plugins/utils.js'
import { mapState } from 'vuex'
function fetchData ({ params, store }) {
  return new Promise(resolve => {
    const prettyId = params.illustration
    let fullIllustration = {}
    let similarIllustrations = {}
    store.dispatch('getFullIllustration', { prettyId })
      .then(response => {
        fullIllustration = response
        const searchQuery = fullIllustration.heading
        store.dispatch('searchIllustrations', { searchQuery })
          .then(response => {
            similarIllustrations = response
            resolve({ fullIllustration, similarIllustrations })
          })
      })
      .catch(error => {
        console.error('page error', error && error.message ? error.message : error)
        resolve({
          error: {
            message: error.message
          }
        })
      })
  })
}

export default {
  layout: 'landing',
  name: 'IllustrationPage',
  async asyncData ({ params, store }) {
    const data = await fetchData({ params, store })
    const title = `${params.illustration.split('-').join(' ')}`
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    store.dispatch('updateSEO', {
      title: `${formattedTitle} — Free vector illustration`,
      description: `Download the free ${formattedTitle} illustration from top Dribbble artists. Free for a link.`,
      image: 'https://cdnd.icons8.com/download/mail/ouch-launch/ouch-share-image.png'
    })
    return data
  },
  computed: {
    ...mapState({
      styles: state => state.styles
    }),
    stylesToCheck () {
      return utils.getRandomArrayElements(this.styles.filter(style => {
        return style.pretty_id !== this.fullIllustration.styles[0].pretty_id
      }))
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../assets/css/variables";
  .menu-section {
    padding-top: 40px;
    background: $color-gray;

    @media (max-width: 1000px) {
      padding-top: 20px;
    }
    @media (max-width: $mobile-width) {
      padding-top: 16px;
    }
  }

  .illustration-section {
    padding-left: 0;
  }

</style>
