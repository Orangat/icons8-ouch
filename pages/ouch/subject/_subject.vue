<template lang="pug">
  .page-subject
    .container
      .bread-crumbs
        a.style(href="/ouch#subject") Subjects\
      h2.title {{ subjectTitle }}
      .subtitle Do you have an empty-looking screen, a long article or a landing page without graphics? Download these “{{ subjectTitle }}" illustrations from top Dribbble artists. They will make your design trendy and class up your content.
      .illustrations
        app-illustration(v-for="preview in previews" :key="preview.id" :isPreview="true" :illustration="preview")
</template>

<script>
function fetchData ({ params, store }) {
  return new Promise(resolve => {
    const subjectId = params.subject
    store.dispatch('getIllustrationsPreviewsForSubject', { subjectId })
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
    const title = params.subject.split('-').join(' ')
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
    subjectTitle () {
      const title = this.$route.params.subject.replace(/-/g, ' ')
      const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)
      return formattedTitle.replace(/[0-9]/g, '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-subject {
    padding-top: 120px;

    @media (max-width: 759px) {
      padding-top: 40px;
    }
    .title {
      display: inline-block;
      margin-bottom: 24px;
    }
    .subtitle {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 56px;
      max-width: 808px;
    }
  }
</style>
