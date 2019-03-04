<template lang="pug">
  .page.container
    h2.title Search results for "{{ searchTitle }}"
    .illustrations
      app-illustration(v-for="preview in previews" :key="preview.id" :isPreview="true" :illustration="preview")
</template>

<script>
function fetchData ({ params, store }) {
  return new Promise(resolve => {
    const searchQuery = params.searchQuery
    store.dispatch('searchIllustrations', { searchQuery })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        console.log(error)
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
  name: 'SearchPage',
  layout: 'app',
  async asyncData ({ params, store }) {
    const previews = await fetchData({ params, store })
    const title = params.searchQuery
    const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    store.dispatch('updateSEO', {
      title: `${formattedTitle} — Free vector images`,
      description: `Download the free ${formattedTitle} images from top Dribbble artists. Free for a link.`,
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
    searchTitle () {
      return this.$route.params.searchQuery
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/css/variables';
  .page {
    .title{
      margin-bottom: 9px;
      @media(min-width: $mobile-width) {
        margin-bottom: 56px;
        margin-left: 0;
      }
    }
  }
</style>
