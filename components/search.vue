<template lang="pug">
  .search
    .search-icon(v-html="$icons.search" @click="openSearch" v-if="!stateSearch")
    form.search-form(:class="{'is-shown': stateSearch}" v-if="stateSearch")
      input(
        type="text"
        ref="search"
        placeholder="Search illustrations"
        :class="{'is-white': whiteSearch}"
        v-model.trim="searchText"
        v-on:keypress.enter.prevent="search"
        v-on:keyup.esc="hideSearch"
      )
      .search-icon.is-black(v-html="$icons.search" @click="search" v-if="stateSearch")
      .close-icon(v-html="$icons.searchClose" @click="closeSearch" v-if="stateSearch")
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    whiteSearch: {
      type: Boolean,
      'default': false
    }
  },
  data () {
    return ({
      searchText: '',
      searchShow: false
    })
  },
  computed: {
    ...mapState({
      stateSearch: state => state.ui.search.active
    })
  },
  methods: {
    ...mapActions([
      'showSearch',
      'hideSearch'
    ]),
    search () {
      if (this.searchText) {
        this.$router.push({ path: `/ouch/search/${this.searchText}` })
      }
    },
    openSearch () {
      this.showSearch()
      this.$nextTick(() => this.$refs.search.focus())
    },
    closeSearch () {
      if (this.searchText) {
        this.search()
      } else {
        this.hideSearch()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables.scss';
  .search {
    .search-icon {
      display: flex;
      align-items: center;
      line-height: 43px;
      cursor: pointer;
      position: relative;
      justify-content: center;
      width: 40px;
      height: 40px;
      /deep/ svg {
        width: 24px;
        height: 24px;
        use {
          fill: #ffffff;
        }
      }

      &.is-black {
        position: absolute;
        left: 7px;
        top: 0;
        line-height: 55px;

        @media (max-width: 1000px) {
          top: 1px;
        }
        @media (max-width: $mobile-width) {
          top: 1px;
        }
        /deep/ svg {
          use {
            fill: $color-dark-green;
          }
        }
      }
    }

    .close-icon {
      width: 12px;
      height: 12px;
      position: absolute;
      right: 13px;
      top: 0;
      cursor: pointer;

      @media (max-width: 1000px) {
        top: 8px;
      }
    }

    .search-form {
      position: relative;
      height: 40px;
      transition: width .3s ease;
      &.is-shown {
        width: 360px;
        margin-bottom: 0;
        display: block;
        @media (max-width: 1240px) {
          width: 320px;
        }
        @media (max-width: 1024px) {
          width: 300px;
        }
        @media (max-width: 1000px) {
          width: 100%;
        }
        @media(max-width: $mobile-width) {
          margin-bottom: 17px;
        }
        input {
          padding-left: 44px;
          opacity: 1;
          border: 1px solid #f5f5f5;
          font-size: 18px;
        }
      }
      input {
        opacity: 0;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 8px;
        background-color: #f5f5f5;

        &.is-white {
          background-color: #fff;
        }
      }
    }
  }
</style>
