<template lang="pug">
  .similar-illustrations.container(v-if="illustrations.length > 1")
    h2 Similar
    .similar-grid
      template(v-for="illustration in illustrations")
        app-illustration(v-if="illustration.styles[0].pretty_id !== currentStyle" :isPreview="true" :key="illustration.id" :illustration="illustration")
</template>

<script>
export default {
  props: {
    illustrations: {
      type: Array,
      default: () => []
    },
    currentStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/variables";
  .similar-illustrations {
    padding-top: 80px;
    padding-bottom: 120px;

    .similar-grid {
      display: flex;
      flex-wrap: wrap;
      padding-top: 56px;
      margin: -12px;
    }
  }
</style>
