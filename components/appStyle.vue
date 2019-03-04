<template lang="pug">
  div.content
    nuxt-link(v-if="!isEmpty" @click.native="setStyle(illustrationStyle.title)" :to="'/ouch/style/'+illustrationStyle.pretty_id" :style="{ backgroundColor: styleBackground }").style
      .preview(v-if="illustrationStyle.thumb1x")
        img(:src="illustrationStyle.thumb2x.url" :class="{'crop': isWide}")
      .description(:class="{'white-text': isWhiteText}")
        h3.title {{ illustrationStyle.title }}
        .counter {{ illustrationStyle.illustrations_count }}
        p.subtitle {{ illustrationStyle.description }}
    div.style.is-empty(v-else)
      img(src="../assets/images/empty_style.png")
      .description
        h3.title Want more?
        p.subtitle Submit theme and our illustrators will draw it. Sooner or later.
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    illustrationStyle: {
      type: Object,
      default: () => {}
    },
    isEmpty: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styleBackground () {
      return this.illustrationStyle.backgroundColor !== '#ffffff' ? this.illustrationStyle.backgroundColor : '#f5f5f5'
    },
    isWhiteText () {
      return this.checkTextColor(this.hexToRgb(this.illustrationStyle.backgroundColor))
    },
    isWide () {
      if (this.illustrationStyle.thumb1x.width > 450) {
        return true
      }
      return false
    }
  },
  methods: {
    ...mapActions([
      'setStyle'
    ]),
    hexToRgb (hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null
    },
    checkTextColor (rgb) {
      if ((rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) > 186) {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables.scss';
  @import '../assets/css/mixins.scss';
  .content {
    margin: 0 12px 24px;
    width: 31%;
    height: 544px;

    @media (max-width: 1040px) {
      height: 504px;
      width: 47%;
    }
    @media (max-width: 810px) {
      width: 45%;
    }
    @media (max-width: $mobile-width) {
      width: 70%;
    }
    @media (max-width: 500px) {
      width: 328px;
    }
  }
  .style {
    @include card-animations;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    justify-content: flex-end;
    overflow: hidden;
    @media(min-width: $mobile-width) {
      //
    }
    &.is-empty {
      background: $color-gray;
      justify-content: flex-end;
      @media(max-width: $mobile-width) {
        height: 200px;
      }
      img {
        width: 50px;
        height: 35px;
        margin-left: 40px;
        margin-bottom: 8px;
      }
    }
    .preview {
      overflow: hidden;
      min-height: 400px;
      img {
        width: 100%;

      }
    }
    .description {
      margin: 0 24px 24px 24px;
      @media(min-width: $mobile-width){
        margin: 0 40px 47px 40px;
      }
      .title {
        display: inline-block;
        margin-right: 5px;
      }
      .counter {
        display: inline-block;
        font-size: 14px;
        letter-spacing: -.35px;
        color: $color-blue;
        font-weight: 600;
        vertical-align: top;
        line-height: 41px;
      }
      .subtitle {
        font-size: 18px;
        line-height: 24px;
        margin: 0;
        max-width: 808px;
      }
      &.white-text {
        color: white;
        .title {
          color: white;
        }
      }
    }
  }
</style>
