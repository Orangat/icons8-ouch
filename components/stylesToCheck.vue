<template lang="pug">
  .styles-to-check
    h2.title Check these styles
    .styles-to-check-grid
      app-style(v-for="style in styles" :key="style.id" :illustrationStyle="style")
</template>

<script>
export default {
  props: {
    styles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables';
  .styles-to-check {
    margin-bottom: 144px;
    @media(max-width: $mobile-width) {
      margin-bottom: 56px;
    }
  }
  .styles-to-check-grid {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 -12px;
    /deep/ a {
      color: black;
    }
  }
  .title {
    display: block;
    margin-bottom: 9px;
    @media(min-width: $mobile-width) {
      display: inline-block;
      margin-bottom: 56px;
      margin-left: 0;
    }
  }
</style>
