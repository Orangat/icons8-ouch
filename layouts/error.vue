<template lang="pug">
  .error
    .menu-section
      app-ouch-menu
    .grey-section
      .container
        img.error-image(src="../assets/images/ouch.png")
        h2(v-if="error.statusCode === 404") No harm intended, <br> but there is no such page
        h2(v-else) An error occurred
        br
        h4 {{ error.statusCode }}
          br
          | {{ error.message }}
          br
          small {{ error.text }}
          br
          small {{ error.stack }}
        .home-link-text Try your luck on&nbsp;
          nuxt-link.home-link(to="/ouch") Homepage
</template>

<script>
export default {
  name: 'NuxtError',
  props: ['error'],
  head () {
    return {
      title: this.error.message || 'An error occured'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variables";
  .error {
    background: $color-gray;
    min-height: 100vh;
    padding-top: 40px;
    @media (max-width: 1000px) {
      padding-top: 20px;
    }
    @media (max-width: $mobile-width) {
      padding-top: 16px;
    }
    .menu-section {
      background: $color-gray;
    }

    .grey-section {
      padding-top: 140px;
      padding-bottom: 100px;
    }

    .error-image {
      padding-bottom: 120px;

      @media (max-width: 630px) {
        width: 100%;
        padding-bottom: 50px;
      }
    }

    .home-link-text {
      font-size: 18px;
      padding-top: 10px;
    }

    .home-link {
      border-bottom: 1px solid #5192E1;
      transition: .3s all;

      &:hover {
        border-color: transparent;
      }
    }
  }
</style>
