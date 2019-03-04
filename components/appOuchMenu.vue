<template lang="pug">
  .container
    .menu.clearfix
      .left.clearfix
        nuxt-link(to="/ouch")
          app-ouch-logo(:class="{'is-white': whiteMenu}")
        .tablet-search(:class="{'is-open': searchState}")
          search(:class="searchClasses" :whiteSearch="whiteMenu")
      .bottom-line-wrap.clearfix
        .middle.clearfix
          .menu-item.search-item(:class="{'is-open-search': searchState}")
            .desk-search
              search(:class="searchClasses" :whiteSearch="whiteMenu")
          .menu-item(:class="{'is-open-search': searchState}")
            app-popup.menu-popup.styles-popup(
              v-bind:show-toggle="false"
              v-bind:position="'bottom-left-search'"
            )
              | Styles
              span(:class="{'is-arrow-white': whiteMenu}" v-html="$icons.dropdown")
              div(slot="content")
                .styles.is-menu
                  ul(v-for="styleRow in formattedStyles")
                    li(v-for="style in styleRow")
                      nuxt-link(@click.native="setStyle(style.title)" :to="'/ouch/style/' + style.pretty_id") {{ style.title }}
          .menu-item(:class="{'is-open-search': searchState}")
            app-popup.menu-popup(
              v-bind:show-toggle="false"
              v-bind:position="'bottom-left-search'"
            )
              | Subjects
              span(:class="{'is-arrow-white': whiteMenu}" v-html="$icons.dropdown")
              div(slot="content")
                app-subjects.is-menu(:elementsPerRow="12")
          .menu-item.about(@click="showMenu") About
        .right.clearfix
          app-menu-auth
          a.button.small(href="/paid-license-99" :class="{'is-white': whiteMenu}" v-if="!user.activeLicense") Unlock SVG
    hr
    full-screen-menu(:class="{'is-active': fullScreenMenu}")
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    whiteMenu: {
      type: Boolean,
      'default': false
    }
  },
  data () {
    return {
      windowWidth: 0
    }
  },
  computed: {
    ...mapState({
      styles: state => state.styles,
      fullScreenMenu: state => state.ui.fullScreenMenu.active,
      user: state => state.auth.user,
      searchState: state => state.ui.search.active
    }),
    formattedStyles () {
      return this.toMatrix(this.styles, 4)
    },
    searchClasses () {
      return {
        'is-black': !this.whiteMenu
      }
    }
  },
  methods: {
    ...mapActions([
      'setStyle',
      'showMenu'
    ]),
    // Converts 1-dimensional array to matrix
    toMatrix (arr, width) {
      return arr.reduce((rows, key, index) => (index % width === 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, [])
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables.scss';
  @import '../assets/css/mixins.scss';
  .app-full-screen-menu.is-active {
    transform: translateX(0);
  }

  ul {
    font-size: 18px;
    line-height: 32px;
  }

  .tablet-search {
    display: none;
    @media (max-width: 1000px) {
      display: block;
      position: absolute;
      right: 0;

      &.is-open {
        width: 100%;
      }
    }
  }

  .desk-search {
    display: block;
    @media (max-width: 1000px) {
      display: none;
    }
  }

  div.app-menu-auth {
    font-size: 18px;
    margin-right: 24px;
    font-weight: 400;

    & /deep/ .login, & /deep/ .app-popup-toggle {
      transition: .3s add;

      &:hover {
        opacity: 0.7;
      }
    }

    @media (max-width: 1240px) {
      margin-right: 0;
    }
  }

  .menu {
    max-width: 1224px;
    margin: 0 auto;
    display: block;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 1024px) {
      display: flex;
    }
    @media (max-width: 1000px) {
      flex-wrap: wrap;
    }

    span {
      /deep/ use {
        stroke: $color-dark-green;
      }
    }

    .left {
      display: flex;
      float: left;

      @media (max-width: 1000px) {
        float: none;
        width: 100%;
        margin-bottom: 20px;
        position: relative;

        &:after {
          content: '';
          display: block;
          position: absolute;
          bottom: -10px;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }

    .middle {
      display: flex;
      float: left;
      align-items: center;
      margin-left: 14%;

      @media (max-width: 1240px) {
        margin-left: 8%;
      }
      @media (max-width: 1000px) {
        margin-left: 0;
      }
    }

    .app-ouch-logo {
      & > /deep/ svg {
        fill: #083232;
      }

      &.is-white > /deep/ svg {
        fill: #fff;
      }
    }

    .right {
      display: flex;
      float: right;
      align-items: center;
      @media (max-width: $mobile-width) {
        position: relative;
        top: -2px;
      }
      .button {
        border-radius: 6px;
        display: none;
        margin-left: 32px;
        height: 32px;
        @media (max-width: 1024px) {
          margin-left: 24px;
        }
        @media(min-width: $mobile-width) {
          display: block
        }
        &.is-white {
          border-color: white;
          color: white;

          &:hover {
            background: #fff;
            color: #9DADA3;
          }
        }
      }
      .loader {
        position: relative;
        width: 24px;
        height: 24px;
        margin-right: 24px;
        @include loading(#fff, 3px, 24px);
      }
    }

    .search {
      &.is-black {
        /deep/ .search-icon {
          use {
            fill: $color-dark-green
          }
        }
      }
    }

    .menu-item {
      font-size: 18px;
      display: inline-block;
      margin-right: 56px;
      transition: opacity 0.3s ease;
      height: 40px;
      line-height: 40px;

      .is-arrow-white /deep/ svg {
        fill: #fff;
      }

      &:first-child {
        margin-right: 42px;

        @media (max-width: 1240px) {
          margin-right: 24px;
        }
        @media (max-width: 1000px) {
          margin-right: 0;
        }
      }

      &.is-open-search {
        margin-right: 32px;

        &:first-child {
          @media (max-width: 1000px) {
            margin-right: 0;
          }
        }

        @media (max-width: 1240px) {
          margin-right: 24px;
        }
      }

      @media (max-width: 1240px) {
        margin-right: 24px;
      }
      @media (max-width: 1024px) {
        margin-right: 24px;
      }

      &:last-of-type {
        margin-right: 0;
      }

      span /deep/ svg {
        height: 16px;
        width: 16px;
        margin-bottom: -3px;
        margin-left: 4px;
      }

      &.about {
        cursor: pointer;
        transition: opacity .3s ease;
        &:hover{
          opacity: 0.7;
        }

        &:focus,
        &:active {
          opacity: 0.5;
        }
      }
    }

    .bottom-line-wrap {
      display: flex;
      justify-content: space-between;
      @media (max-width: 1024px) {
        width: calc(100% - 82px);
      }
      @media (max-width: 1000px) {
        width: 100%;
      }

      &:after {
        display: none;
      }
    }

    .search-item {
      display: flex;
      justify-content: center;
      border-radius: 6px;
      transition: .3s all;
      cursor: pointer;

      &:hover {
        background: rgba(8,50,50,.05);
      }
    }

    .styles {
      display: flex;
      flex-direction: row;
      margin-top: 45px;
      margin-bottom: 140px;
      @media(max-width: $mobile-width) {
        flex-direction: column;
      }
      ul {
        margin-right: 46px;
      }
      &.is-menu {
        margin: 0;
        padding: 36px 48px;
      }
    }
    .is-menu {
      padding: 36px 48px;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: -6px;
        left: 50%;
        margin-left: -2%;
        width: 27px;
        height: 6px;
        background: url("/vue-static/ouch/pointer.svg");

        @media (max-width: 1000px) {
          left: 22px;
          margin-left: 0;
        }
      }
    }

    .menu-popup /deep/ .app-popup-toggle {
      transition: opacity .3s ease;
      &:hover{
        opacity: 0.7;
      }

      &:focus,
      &:active {
        opacity: 0.5;
      }
    }

    .menu-popup /deep/ .app-popup-content {
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      background: white;
      top: 125%;
      overflow: visible;
      .subjects {
        margin-bottom: 0;
      }

      &.is-bottom-left-search {
        z-index: 10;
        transform: translateX(0);
        top: 125%;
        @media (min-width: 1000px) {
          top: 125%;
          bottom: auto;
          left: 50%;
          margin-top: 2px;
          margin-bottom: 0;
          transform: translateX(-50%) scale(1);
        }
      }
    }

    .styles-popup /deep/ .app-popup-content {
      @media(min-width: $mobile-width) {
        /*width: 500px;*/
      }
    }
  }

  hr {
    margin-bottom: 0;
    margin-top: 15px;
    opacity: 0.1;
    @media(min-width: $mobile-width) {
      display: none;
    }
  }
</style>
