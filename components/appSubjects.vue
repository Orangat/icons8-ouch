<template lang="pug">
  .subjects
    ul(v-for="subjectRow in formattedSubjects")
      li(v-for="subject in subjectRow")
        nuxt-link(@click.native="setSubject(subject.title)" :to="'/ouch/subject/' + subject.pretty_id") {{ subject.title }}
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    elementsPerRow: {
      type: Number,
      default: 10
    }
  },
  computed: {
    ...mapState({
      subjects: state => state.subjects
    }),
    formattedSubjects () {
      return this.toMatrix(this.subjects, this.elementsPerRow)
    }
  },
  methods: {
    ...mapActions([
      'setSubject'
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
  ul {
    font-size: 18px;
    line-height: 32px;
  }

  h2 {
    padding-left: 24px;
    @media(min-width: $mobile-width) {
      padding-left: 0;
    }
  }
  .subjects {
    display: flex;
    flex-direction: row;
    margin-bottom: 140px;
    margin-top: 41px;
    flex-wrap: wrap;

    @media(max-width: $mobile-width){
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      margin-bottom: 50px;
    }
    &.is-menu {
      padding-left: 40px;
      padding-right: 40px;
      flex-wrap: nowrap;
      margin-top: 0;
      @media(max-width: $mobile-width) {
        margin: 0;
        padding: 36px 48px;
        flex-wrap: nowrap;

        max-height: 699px;
        overflow-y: auto;
      }
      ul {
        padding-left: 0;
        width: 184px;
        min-width: 0;
        @media (max-width: 1240px) {
          width: 165px;
        }
        @media (max-width: 870px) {
          margin-right: 6px;
        }
      }
    }
    ul {
      margin-right: 0;
      margin-bottom: 0;
      min-width: 199px;
      @media(min-width: $mobile-width) {
        margin-bottom: 24px;
        margin-right: 24px;
        padding-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
</style>
