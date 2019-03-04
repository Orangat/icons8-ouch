<template lang="pug">
  .buy
    .container
      .main-content
        .cta
          h2.title Get Vectors. <br/>
            | Don't credit our work.
          a.button.filled(href="https://icons8.com/paid-license-99/#/") Buy for $19.90/month
        img(src="../assets/images/buy/buyArt.png")
      .secondary-content
        | You will get
        .advantages
          .advantage
            div.icon(v-html="$icons.firstAdvantage")
            | Vector source files for all our <br> illustrations.
          .advantage
            div.icon(v-html="$icons.secondAdvantage")
            | Permission to edit the files. <br> Combine them to tell your story.
          .advantage
            div.icon(v-html="$icons.thirdAdvantage")
            | Complimentary access to all our <br> icons, music and photos.

</template>

<script>
import firstSvg from '../assets/svg/firstAdvantage.svg'
import secondSvg from '../assets/svg/secondAdvantage.svg'
import thirdSvg from '../assets/svg/thirdAdvantage.svg'
export default {
  data () {
    return ({
      advantages: [
        {
          title: 'Vector source files for all our \nillustrations.',
          img: firstSvg
        },
        {
          title: 'Permission to edit the files.\nCombine them to tell your story.',
          img: secondSvg
        },
        {
          title: 'Complimentary access to all our \nicons, music and photos.',
          img: thirdSvg
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables.scss';
  .buy {
    background: $color-gray;
    padding: 48px 0 23px 0;
    .button {
      height: 56px;
      line-height: 56px;
    }
    @media(min-width: $mobile-width) {
      padding: 105px 0 125px 0px;
    }
    .main-content {
      max-width: 1224px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .cta {
        max-width: 600px;
        margin-top: 0;
        @media(min-width: $mobile-width) {
          margin-top: 45px;
        }

        .title {
          margin-bottom: 24px;
          line-height: 40px;
          @media(min-width: $mobile-width) {
            line-height: 56px;
          }

          .link {
            display: inline-block;
            cursor: pointer;
          }
        }
      }

      img {
        width: 332px;
        height: 243px;
        display: none;
        @media(min-width: $mobile-width) {
          display: block;
        }
      }
    }

    .secondary-content {
      max-width: 1224px;
      margin: 50px auto 0;
      font-size: 18px;
      letter-spacing: -.2px;
      font-weight: 600;

      @media(min-width: $mobile-width) {
        margin-top: 70px
      }
      .advantages {
        max-width: 1120px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 16px;
        .advantage{
          font-size: 18px;
          letter-spacing: -.2px;
          display: flex;
          white-space: pre-line;
          line-height: 24px;
          font-weight: 400;
          margin-bottom: 32px;
          @media(min-width: $mobile-width) {
            margin-bottom: 0;
          }
          /deep/ svg {
            width: 48px;
            height: 48px;
            margin-right: 16px;
          }
        }
      }
    }
  }
</style>
