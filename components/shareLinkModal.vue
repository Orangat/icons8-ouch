<template lang="pug">
  .download-illustration-modal
    app-modal(
      ref="modal"
      name="share-link"
      :width="496"
      :content-class="['is-big', 'download-illustration-modal']"
    )
      h3 Nice!
      .subtitle Now do not forget to set a link
      .share-box
        | illustration by Ouch.pics
        .button.small(@click="copyLink")
          template(v-if="!copyPressed")
            | Copy link
          template(v-else)
            | Link Copied!
</template>

<script>
export default {
  data () {
    return {
      link: '',
      copyPressed: false
    }
  },
  mounted () {
    let getUrl = window.location
    this.link = getUrl.protocol + '//' + getUrl.host
  },
  methods: {
    copyLink () {
      const el = document.createElement('textarea')
      el.value = this.link
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.copyPressed = true
    }
  }
}
</script>

<style lang="scss">
  .download-illustration-modal{
      padding: 32px 40px 48px 40px;
      .subtitle {
        font-size: 18px;
        line-height: 24px;
        margin-top: 9px;
        margin-bottom: 27px;
        max-width: 416px;
      }
      .share-box {
        background: #F5F5F5;
        font-size: 14px;
        font-weight: 500;
        padding: 0 24px;
        border-radius: 8px;
        height: 56px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
</style>
