<template lang="pug">
  .ouch
    nuxt
    buy
    media
    app-footer.is-darkblue
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      ...this.seo
    }
  },
  computed: {
    ...mapState({
      seo: state => state.seo.data
    })
  },
  watch: {
    $route () {
      setTimeout(() => {
        document.getElementsByClassName('simplebar-scroll-content')[0].scrollTop = 0
      }, 250)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Paytone+One');

  .ouch {
    min-width: 360px;
  }

  .is-darkblue {
    background: #3F3658;
  }
</style>
