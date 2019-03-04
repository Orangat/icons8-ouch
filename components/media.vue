<template lang="pug">
  .media
    .container
      .solve-problem
        h2 Problem we solve
        .content.clearfix
          .left
            p.semibold-text Creators who don’t draw face the problem of the boring content for app screens, articles, landing pages and emails.
            p Ouch helps creators who don’t draw overcome the lack of quality graphics. Download the free illustrations from top&nbsp;
              span.semibold-text <a class="link" href="https://dribbble.com/icons8">Dribbble artists</a>&nbsp;
              | to class up your product.
          .right
            p We have paid the top Dribbble artists. So you don’t have to! The result is the illustrations in 14 styles for 23 typical UX screens:
            .styles
              nuxt-link(to="/ouch/subject/success-1")
                span.style Success
              nuxt-link(to="/ouch/subject/list-is-empty-1")
                span.style List is empty
              nuxt-link(to="/ouch/subject/message-sent-1")
                span.style Message sent
              nuxt-link(to="/ouch/subject/fatal-error-1")
                span.style Fatal error
              nuxt-link(to="/ouch/subject/404-error")
                span.style Page not found
              nuxt-link(to="/ouch/subject/unsubscribed-1")
                span.style Unsubscribed
              nuxt-link(to="/ouch/subject/log-out")
                span.style Log out
              nuxt-link(to="/ouch/subject/message-sent-1")
                span.style Message sent
              nuxt-link(to="/ouch/subject/done-1")
                span.style Done
              nuxt-link(to="/ouch/subject/sign-up-1")
                span.style Sign up
              span.italic etc
            p
              span.semibold-text <a class="link" href="https://assets-ouch.icons8.com/archives/icons8-ouch.zip">Download free for a link.</a>&nbsp;
              | The result is the trendy design on par with top design teams.
      .media-link
        h3 Spread The Word
        share-link
</template>

<style lang="scss" scoped>
  @import '../assets/css/variables.scss';
  .media {
    background: $color-yellow;
    display: flex;

    .content {
      padding-top: 48px;
    }

    .solve-problem {
      padding: 128px 0;
      border-bottom: 1px solid rgba(8,50,50,.15);
    }

    .left {
      width: 47%;
      margin-right: 3%;
      float: left;

      @media (max-width: $mobile-width) {
        width: 100%;
        float: none;
        margin: 0;
      }
    }

    .right {
      width: 50%;
      float: left;

      @media (max-width: $mobile-width) {
        width: 100%;
        float: none;
      }
    }

    .styles {
      margin: 24px 0 32px;
    }

    .style {
      font-size: 14px;
      display: inline-block;
      font-weight: 600;
      color: #083232;
      height: 24px;
      line-height: 24px;
      margin: 0 8px 8px 0;
      border-radius: 12px;
      background: rgba(255,255,255,.5);
      padding: 0 10px;
    }

    .italic {
      font-style: italic;
      font-size: 14px;
    }

    p {
      margin: 0 0 24px 0;
      max-width: 496px;
      font-size: 18px;
      color: #083232;
    }

    .semibold-text {
      font-weight: 500;
    }

    .link {
      font-size: 18px;
      font-weight: 500;
      color: #083232;

    }

    .media-link {
      padding: 48px 0;
      display: flex;
      flex-direction: column;

      @media(min-width: $mobile-width) {
        justify-content: space-between;
        flex-direction: row;
      }

      .share-link {
        margin: 0;
        text-align: left;

        @media(min-width: $mobile-width) {
          text-align: center;
        }

        /deep/ .item {
          background-color: rgba($color-dark-green, .1);
          border-radius: 6px;
          font-weight: 600;
          margin-left: 0;
          margin-right: 16px;

          @media(min-width: $mobile-width) {
            margin: 0.5rem;
          }

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
