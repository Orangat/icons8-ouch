<template lang="pug">
  .illustration-description.page-section
    .container.clearfix
      .content
        .left-side
          img(:src="illustration.preview2x.url")
        .right-side
          .bread-crumbs
            a.style(href="/ouch#styles") Styles\
            nuxt-link.style(:to="'/ouch/style/'+illustration.styles[0].pretty_id") {{ illustration.styles[0].title }}\
          h2.heading {{ illustration.heading }}
          .tags(v-if="illustration.tags.length")
            nuxt-link.tags-item(v-for="tag in formattedTags" :key="tag.id" :to="'/ouch/tag/' + tag.pretty_id") {{ tag.title }}
          a.button.filled(@click="openDownload")
            template(v-if="!loading")
              | Download illustration
            template(v-else)
              | Loading
          .free-link Use <a class="png-link" @click.prevent="getDownloadPngLInk" href="#">PNG free for a link</a> or buy Icons8 subscription
          //.author.free-link(v-if="illustration.author.name === 'Icons 8'") Illustration by <a class="png-link" href="https://icons8.com">{{ illustration.author.name }}</a>
          //.author.free-link(v-else) Illustration by {{ illustration.author.name }}
    download-illustration-modal(@downloaded="openShareModal" :downloadLink="downloadLink" :name="downloadModalName" :illustrationName="illustration.pretty_id")
    share-link-modal
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'IllustrationDescription',
  props: {
    illustration: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return ({
      downloadLink: {},
      licenseExpired: true,
      loading: false
    })
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
    backgroundImage () {
      return `background: url(${this.illustration.preview2x.url}) no-repeat;`
    },
    downloadModalName () {
      return `${this.illustration.pretty_id}downloadModal`
    },
    formattedTags () {
      if (this.illustration.tags.length > 6) {
        return this.illustration.tags.slice(0, 6)
      } else {
        return this.illustration.tags
      }
    }
  },
  mounted () {
    console.log('this.illustration', this.illustration)
  },
  methods: {
    ...mapActions([
      'getUser',
      'syncUser'
    ]),
    checkUserSynced () {
      return new Promise((resolve, reject) => {
        this.getUser().then(response => {
          for (let license of this.user.licenses) {
            const currentTimestamp = parseInt(Date.now() / 1000)
            if (license.purchased > response.last_sync || (license.expire < currentTimestamp && currentTimestamp - response.last_sync < 300) || (response.license.expired && license.expire > currentTimestamp)) {
              this.loading = true
              this.syncUser().then((response) => {
                this.loading = false
                if (license.expire >= currentTimestamp) {
                  this.licenseExpired = false
                }
                resolve()
              })
            } else {
              this.licenseExpired = false
              resolve()
            }
          }
        })
      })
    },
    getDownloadPngLInk () {
      axios.request({
        url: `https://api-ouch.icons8.com/api/v1/illustrations/${this.illustration.id}/download-url`,
        method: 'get',
        withCredentials: true
      })
        .then((response) => {
          this.downloadLink.png = response.data.url
          location.href = this.downloadLink.png
        })
        .catch(error => {
          console.log(error)
        })
    },
    openDownload () {
      if (this.user && this.user.loaded && !this.user.isGuest && this.user.activeLicense && this.user.licenses.length) {
        // Syncing fast ouch backend auth with slow icons8 backend auth
        this.checkUserSynced().then(() => {
          if (!this.licenseExpired) {
            this.getSvgLink()
          } else {
            this.getPngLink()
          }
        })
      } else {
        this.getPngLink()
      }
    },
    openShareModal () {
      this.$modal.hide(this.downloadModalName)
      this.$modal.show('share-link')
    },
    getPngLink () {
      axios.request({
        url: `https://api-ouch.icons8.com/api/v1/illustrations/${this.illustration.id}/download-url`,
        method: 'get',
        withCredentials: true
      })
        .then((response) => {
          this.$modal.show(this.downloadModalName)
          this.downloadLink.png = response.data.url
        })
        .catch(error => {
          this.$modal.show(this.downloadModalName)
          console.log(error)
        })
    },
    getSvgLink () {
      axios.request({
        url: `https://api-ouch.icons8.com/api/v1/illustrations/${this.illustration.id}/download-url?media_format=svg`,
        method: 'get',
        withCredentials: true
      })
        .then((response) => {
          this.downloadLink.svg = response.data.url
          this.getPngLink()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variables";
  .right-side {
    padding: 24px 0 0 24px;
    @media (max-width: 768px) {
      margin-bottom: 40px;
      padding-left: 0;
    }
    .heading {
      max-width: 475px;
    }
  }

  .content {
    display: flex;
    justify-content: flex-start;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .left-side {
    width: 808px;
    margin-bottom: 96px;
    display: flex;
    justify-content: center;

    @media (max-width: 1120px) {
      width: 87%;
    }

    @media (max-width: 768px) {
      margin-bottom: 0;
      padding-top: 0;
      width: 100%;
    }
    img {
      pointer-events: none;
      max-width: 808px;
      max-height: 500px;
      border-radius: 6px;

      @media (max-width: 1120px) {
        max-width: 100%;
        width: auto;
      }

      @media (max-width: 960px) {
        max-height: 400px;
      }

      @media (max-width: 768px) {
        max-width: 100%;
        width: auto;
        margin-bottom: 40px;
      }

      @media (max-width: 540px) {
        max-height: 270px;
      }
    }
  }

  .illustration-description {
    background: $color-gray;
    padding-top: 112px;

    .tags-item {
      display: inline-block;
      font-size: 14px;
      color: #5092E1;
      height: 24px;
      padding: 0 8px;
      margin: 0 8px 5px 0;
      line-height: 24px;
      font-weight: 500;
      background: rgba(80,146,225,.1);
      border-radius: 10px;
      transition: all .3s ease;
      &:hover {
        background: rgba(80,146,225,.2);
      }
      &:focus,
      &:active {
        background: rgba(80,146,225,.3);
      }
    }

    .button {
      height: 56px;
      line-height: 56px;
      margin-bottom: 72px;
    }

    .tags {
      padding: 24px 0 27px;
      max-width: 300px;
    }

    .free-link {
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
    }

    .author {
      padding-top: 8px;
    }

    .png-link {
      border-bottom: 1px solid;
      transition: .3s all;
      cursor: pointer;

      &:hover {
        border-color: transparent;
      }
    }
  }
</style>
