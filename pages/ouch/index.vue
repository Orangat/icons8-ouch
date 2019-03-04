<template lang="pug">
  .landing
    section.page-section.dark-green
      app-ouch-menu.is-light(:whiteMenu="true")
      .container
        .hero
          h1(v-html="$t('OUCH.MAIN_PAGE.TITLE')")
          a.button(href="https://assets-ouch.icons8.com/archives/icons8-ouch.zip") {{ $t('OUCH.MAIN_PAGE.DOWNLOAD_ALL_PNG') }}
          img.artboard(src="~assets/images/landing-art@2x.png")
    section.page-section.white
      .container
        h2(id="subject") {{ $t('OUCH.MAIN_PAGE.SUBJECT') }}
        app-subjects
      .container
        h2.styles-title(id="styles") {{ $t('OUCH.MAIN_PAGE.STYLES') }}
        .styles
          app-style(v-for="style in sortedStyles" :illustrationStyle="style" :key="style.id" )
          //- Request Illustration not needed yet
          //- app-style(:isEmpty="true")
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'landing',
  name: 'LandingPage',
  async asyncData ({ store, app }) {
    store.dispatch('updateSEO', {
      title: app.$t('OUCH.MAIN_PAGE.SEO.TITLE'),
      description: app.$t('OUCH.MAIN_PAGE.SEO.DESCRIPTION'),
      image: 'https://cdnd.icons8.com/download/mail/ouch-launch/ouch-share-image.png'
    })
  },
  computed: {
    ...mapState({
      styles: state => state.styles
    }),
    sortedStyles () {
      let sortedStyles = []
      sortedStyles[0] = this.styles[this.styles.findIndex(element => element.title === 'Pablo')]
      sortedStyles[1] = this.styles[this.styles.findIndex(element => element.title === 'Pale')]
      sortedStyles[2] = this.styles[this.styles.findIndex(element => element.title === 'Pluto')]
      sortedStyles[3] = this.styles[this.styles.findIndex(element => element.title === 'Abstract')]
      sortedStyles[4] = this.styles[this.styles.findIndex(element => element.title === 'Flamenco')]
      sortedStyles[5] = this.styles[this.styles.findIndex(element => element.title === 'Bermuda')]
      sortedStyles[6] = this.styles[this.styles.findIndex(element => element.title === 'Karlsson')]
      sortedStyles[7] = this.styles[this.styles.findIndex(element => element.title === 'Hugo')]
      sortedStyles[8] = this.styles[this.styles.findIndex(element => element.title === 'Fogg')]
      sortedStyles[9] = this.styles[this.styles.findIndex(element => element.title === 'Mirage')]
      sortedStyles[10] = this.styles[this.styles.findIndex(element => element.title === 'Marginalia')]
      sortedStyles[11] = this.styles[this.styles.findIndex(element => element.title === 'Cherry')]
      sortedStyles[12] = this.styles[this.styles.findIndex(element => element.title === 'Rush')]
      if (this.styles.length > 13) {
        sortedStyles.push(...this.styles.slice(13))
      }
      console.log(sortedStyles)
      return sortedStyles
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/css/variables';
  .ouch {
    padding-top: 0!important;
  }
  .landing{
    overflow: hidden;
    /deep/ .simplebar-content {
      overflow-x: hidden;
    }
    .is-light {
      color: #fff;

      & > .menu-popup /deep/ svg {
        width: 100px;
      }
    }
  }

  .dark-green {
    background: $color-olive;
    height: 846px;
    margin-bottom: 160px;
    padding-top: 40px;
    @media (max-width: 1000px) {
      height: 846px;
      padding-top: 20px;
    }
    @media (max-width: $mobile-width) {
      height: 720px;
      margin-bottom: 128px;
      padding-top: 16px;
    }
    .app-ouch-logo {
      margin-top: 47px;
      margin-bottom: 24px;
      @media(min-width: $mobile-width) {
        display: none;
      }
      &.is-white {
        color: white;
      }
    }
    .hero {
      max-width: 1224px;
      margin-top: 98px;
      @media (max-width: $mobile-width) {
        margin: 120px auto 0;
      }
      @media (max-width: 1000px) {
        margin-top: 58px;
      }
      @media (max-width: 775px) {
        margin-top: 90px;
      }
      @media (max-width: 470px) {
        margin-top: 39px;
      }
      h1 {
        white-space: pre-line;
        margin-bottom: 32px;
      }
    }

    .artboard {
      position: static;
      pointer-events: none;
      margin-top: -143px;
      width: 1568px;
      margin-left: -40px;
      @media(max-width: $mobile-width) {
        position: absolute;
        left: 0;
        top: 466px;
        width: 1065px;
      }
      @media (max-width: 605px) {
        top: 563px;
        width: 804px;
      }
    }
  }

  .styles {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 56px;
    padding-top: 56px;
    justify-content: center;
    margin: 0 -12px;
    /deep/ a {
      color: black;
    }
    @media(min-width: $mobile-width) {
      justify-content: flex-start;
      margin-bottom: 151px;
    }
  }

  .white {
    max-width: 1224px;
    margin: 0 auto;
    padding-left: 0;
  }

</style>
