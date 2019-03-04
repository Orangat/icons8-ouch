<template lang="pug">
  .app-ouch-logo(v-html="$icons.Ouch")
</template>

<style lang="scss" scoped>
  .app-ouch-logo {
    display: inline-block;
    transition: 0.3s opacity ease;
    width: 82px;
    height: 32px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.7;
    }

    .o {
      display: inline-block;
    }

    .exclamation {
      display: inline-block;
    }
  }
</style>
