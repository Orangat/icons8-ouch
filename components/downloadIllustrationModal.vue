<template lang="pug">
  .download-illustration-modal
    app-modal(
    ref="modal"
    :name="name"
    :width="496"
    :content-class="['is-big', 'download-illustration-modal']"
    )
      h3 Before you proceed
      .download_modal_subtitle Choose the format in which you want to download this illustration
      .download_modal_buttons
        .button.filled(@click="download('png')") Download PNG
        = ' '
        .button.filled(@click="download('svg')" :class="{'disabled': !user.activeLicense}") Download SVG
        a.download_modal_unlock(target="_blank" href="/paid-license-99" v-if="!user.activeLicense")
          .download_modal_unlock-icon(v-html="$icons.unlock")
          | Unlock for $20/month
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    downloadLink: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      default: ''
    },
    illustrationName: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  methods: {
    checkExpiration (expirationDate) {
      const currentTime = Math.floor(Date.now() / 1000)
      return currentTime <= expirationDate
    },
    download (type) {
      if (this.downloadLink) {
        console.log('this.downloadLink[type]', this.downloadLink[type])
        let a = document.createElement('a')
        a.href = this.downloadLink[type]
        a.setAttribute('target', '_blank')
        if (a.download !== undefined) {
          // Set HTML5 download attribute. This will prevent file from opening if supported.
          a.download = `${this.illustrationName}.${type}`
        }

        document.body.appendChild(a)
        if (type === 'png' && !this.user.activeLicense) {
          this.$emit('downloaded')
        }
        if (document.createEvent) {
          let e = document.createEvent('MouseEvents')
          e.initEvent('click', true, true)
          a.dispatchEvent(e)
          return true
        } else {
          a.click()
        }
      } else {
        console.log('Download link is empty')
      }
    }
  }
}
</script>

<style lang="scss">
  .download-illustration-modal {
    & /deep/ .close {
      &:hover {
        background-color: transparent!important;
      }
    }

      padding: 32px 40px 48px 40px;
      .download_modal_subtitle {
        font-size: 18px;
        line-height: 24px;
        margin-top: 9px;
        margin-bottom: 27px;
        max-width: 416px;
      }
      .download_modal_buttons {
        display: flex;
        position: relative;
        .button {
          &:first-of-type {
            margin-right: 24px;
          }
        }
      }
      .download_modal_unlock {
        position: absolute;
        font-size: 12px;
        right: 36px;
        bottom: -25px;
      }
      .download_modal_unlock-icon {
        width: 12px;
        height: 13px;
        display: inline-block;
        margin-right: 4px;

    }
  }
</style>
