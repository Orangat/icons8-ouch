<template lang="pug">
  .page-tag
    .container
      h2.title {{ tagTitle }}
      .illustrations
        app-illustration(v-for="preview in previews" :key="preview.id" :isPreview="true" :illustration="preview")
</template>

<script>
function fetchData ({ params, store }) {
  return new Promise(resolve => {
    const tagId = params.tag
    store.dispatch('getIllustrationsPreviewsForTag', { tagId })
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
  name: 'SubjectPage',
  layout: 'app',
  async asyncData ({ params, store }) {
    const previews = await fetchData({ params, store })
    const title = params.tag.split('-').join(' ')
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
    tagTitle () {
      const title = this.$route.params.tag.replace(/-/g, ' ')
      const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)
      return formattedTitle.replace(/[0-9]/g, '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-tag {
    padding-top: 136px;
    .title {
      display: inline-block;
      margin-bottom: 56px;
    }
  }
</style>
