<template lang="pug">
  .page-style
    .container
      .bread-crumbs
        a.style(href="/ouch#styles") Styles\
      h1.title {{ styleTitle }}
      .subtitle {{ styleDescription }}
      .illustrations
        app-illustration(v-for="preview in previews" :key="preview.id" :isPreview="true" :illustration="preview")
      styles-to-check(:styles="stylesToCheck")
</template>

<script>
import { mapState } from 'vuex'
import utils from '../../../plugins/utils.js'

function fetchIllustrations ({ params, store }) {
  return new Promise(resolve => {
    const styleId = params.style
    store.dispatch('getIllustrationsPreviewsForStyle', { styleId })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        errorHandler(resolve, error)
      })
  })
}

function errorHandler (resolve, error) {
  console.log(error)
  console.error('page error', error && error.message ? error.message : error)
  resolve({
    error: {
      message: error.message
    }
  })
}

export default {
  name: 'StylePage',
  layout: 'app',
  async asyncData ({ params, store }) {
    const previews = await fetchIllustrations({ params, store })
    const title = params.style.split('-')[0]
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    store.dispatch('updateSEO', {
      title: `${formattedTitle} — Free vector drawings`,
      description: 'Download the free drawings from top Dribbble artists. Free for a link.',
      image: 'https://cdnd.icons8.com/download/mail/ouch-launch/ouch-share-image.png'
    })
    return { previews }
  },
  data () {
    return ({
      previews: []
    })
  },
  computed: {
    ...mapState({
      styles: state => state.styles
    }),
    stylesToCheck () {
      return utils.getRandomArrayElements(this.styles.filter(style => {
        return style.pretty_id !== this.$route.params.style
      }))
    },
    styleTitle () {
      return this.filteredStyle.title
    },
    styleDescription () {
      return this.filteredStyle.description
    },
    filteredStyle () {
      return this.styles.filter(style => {
        return style.pretty_id === this.$route.params.style
      })[0]
    },
    similar () {
      // Unimplemented
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/css/variables';
  .page-style {
    padding-top: 40px;
    @media(min-width: $mobile-width) {
      padding-top: 120px;
    }
    .title, .subtitle {
      display: block;
    }
    .title{
      margin-bottom: 24px;
      margin-left: 0;
      @media(max-width: $mobile-width) {
        margin-bottom: 9px;
      }
    }
    .subtitle {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 56px;

      @media (max-width: $mobile-width) {
        margin-bottom: 32px;
      }
    }
  }
</style>
