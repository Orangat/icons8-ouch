<template lang="pug">
  div.content
    template(v-if="isPreview")
      nuxt-link(:to="'/ouch/illustration/' + illustration.pretty_id")
        .illustration(:class="{'with-padding': withPadding, 'white-background': isWhiteBackground}")
          img(:src="illustration.thumb2x.url")
</template>

<script>
export default {
  props: {
    isPreview: {
      type: Boolean,
      default: false
    },
    illustration: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    withPadding () {
      if (this.styleName !== 'fogg-5' && this.styleName !== 'abstract' && this.styleName !== 'pale' && this.styleName !== 'pablo-1') {
        return true
      }
      return false
    },
    isWhiteBackground () {
      return this.styleName === 'marginalia'
    },
    styleName () {
      return this.illustration.styles[0].pretty_id
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables.scss';
  @import '../assets/css/mixins.scss';
  .content {
    width: 31%;
    height: 291px;
    margin: 0 12px 24px;
    &.is-wide {
      height: 100%;
    }
    @media (max-width: 1040px) {
      width: 30%;
    }
    @media (max-width: $mobile-width) {
      width: 45%;
    }
    @media (max-width: 600px) {
      width: 328px;
      margin: 0 auto 24px;
    }
    @media (max-width: 380px) {
      width: 100%;
    }
  }
  .illustration {
    @include card-animations;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: $color-gray;
    overflow: hidden;
    border-radius: 8px;
    &.white-background {
      background: white;
    }
    &.with-padding {
      padding: 37px 0;
    }
    @media (min-width: $mobile-width) {
      margin-right: 24px;
    }
    img {
      height: 100%;
    }
  }
</style>
