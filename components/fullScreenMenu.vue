<template lang="pug">
  .app-full-screen-menu(v-app-scroll data-simplebar)
    .full-screen-menu
      .first-row
        a(href="https://www.icons8.com/")
          .icons8-logo(v-html="$icons.logo")
        .close(v-html="$icons.cancel" @click="hideMenu")
      .content-absolute
        .content
          .heading
            span.o O
            span.uch uch
            span.exclamation-mark !
          .text-row
            .left Ouch.pics is another side project of Icons8 dedicated to interface illustrations. They would give a clean, trendy look to your designs. Alongside with stock photos, icons, and music, we are determined to build a design platform and change the way people create things.
            .right
              .wrap-link
                a.link.is-indent-right(href="/privacy-policy") Privacy Policy
              .wrap-link
                a.link(href="/terms-and-conditions") Terms and Conditions
          .bottom-row
            .subheading Check our other projects
            .other-projects
              .project-list.left
                a.project(href="https://icons8.com/lunacy")
                  .project-icon.lunacy-icon(v-html="$icons.icons8Lunacy")
                  .project-title Lunacy&nbsp;
                    br.is-hidden
                    | Graphic design software <br> for Windows
                a.project(href="https://icons8.com/icons")
                  .project-icon.icons8-icon(v-html="$icons.icons8Icon")
                  .project-title Icons8 app&nbsp;
                    br.is-hidden
                    | Free flat Icons in any <br> format, size and color
                a.project(href="https://icons8.com/music")
                  .project-icon.fugue-icon(v-html="$icons.fugueIcon")
                  .project-title Fugue&nbsp;
                    br.is-hidden
                    | Free music for your <br> explainer videos
              .project-list.right
                a.project(href="#")
                  .project-icon.moose-icon(v-html="$icons.mooseIcon")
                  .project-title Moose&nbsp;
                    br.is-hidden
                    | Stock photos designed <br> to work together
                //a.project(href="#")
                //  .project-icon.labs-icon(v-html="$icons.labsIcon")
                //  .project-title Labs.&nbsp;
                //    br.is-hidden
                //    | Bunch of experimantal <br> apps and services
          .close.is-bottom(v-html="$icons.cancel" @click="hideMenu")

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      fullScreenMenu: state => state.ui.fullScreenMenu.active
    })
  },
  methods: {
    ...mapActions([
      'hideMenu'
    ])
  }
}
</script>

<style scoped lang="scss">
  .app-full-screen-menu {
    overflow-y: auto;
    background: rgba(61, 54, 91, .99);
    width: 97%;
    height: 95vh;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -48.5%;
    margin-top: -47.5vh;
    z-index: 10;
    border-radius: 6px;
    transition: .6s all;
    transform: translateX(103%);

    @media (max-width: 768px) {
      width: 100%;
      height: 100vh;
      left: 0;
      top: 0;
      margin: 0;
      border-radius: 0;
    }
  }
  .content-absolute {
    @media(min-width: 1024px) {
      position: absolute;
      width: 80%;
      left: 50%;
      margin-left: -40%;
      top: 50%;
      margin-top: -240px;
    }
  }

  .icons8-logo /deep/ svg {
    fill: #fff;
  }

  .full-screen-menu {
    @media (max-width: 1024px) {
      padding: 100px 48px 48px;
    }
    @media (max-width: 850px) {
      padding: 48px;
    }
    @media (max-width: 768px) {
      padding: 30px 24px 24px;
    }

    .icons8-logo {
      width: 32px;
      height: 32px;
      position: absolute;
      top: 32px;
      left: 32px;

      @media (max-width: 850px) {
        position: static;
        margin-bottom: 30px;
      }

      & /deep/ svg {
        width: 100%;
        height: 100%;
      }
    }

    .first-row {
      @media (max-width: 850px) {
        display: flex;
        justify-content: space-between;
      }
    }

    .close {
      width: 27px;
      height: 27px;
      position: absolute;
      top: 24px;
      right: 24px;
      cursor: pointer;

      @media (max-width: 850px) {
        position: relative;
        top: -5px;
        right: 0;
      }

      &.is-bottom {
        display: none;
        @media (max-width: 768px) {
          display: block;
          margin: 0 auto;
        }
      }

      & /deep/ svg {
        width: 100%;
        height: 100%;
        fill: #fff
      }
    }

    .content {
      color: #fff;
    }

    .heading {
      font-family: 'Paytone One', sans-serif;
      color: #fff;

      .o {
        font-size: 72px;
      }

      .uch {
        font-size: 64px;
      }

      .exclamation-mark {
        font-size: 72px;
      }
    }

    .text-row {
      display: flex;
      justify-content: space-between;

      @media (max-width: 850px) {
        flex-direction: column;
      }

      .left {
        font-size: 18px;
        max-width: 546px;

        @media (max-width: 768px) {
          max-width: 100%;
        }
      }

      .right {
        font-size: 14px;

        @media (max-width: 850px) {
          padding-top: 20px;
          line-height: 30px;
        }

        .wrap-link a {
          color: rgba(255, 255, 255, .6);
          border-bottom: 1px solid;
          transition: .3s all;

          &:hover {
            border-color: transparent;
          }
        }
      }
    }

    .bottom-row {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      margin-top: 80px;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;

      @media (max-width: 768px) {
        margin-top: 50px;
        padding-top: 50px;
      }
    }

    .subheading {
      padding-top: 23px;
      padding-bottom: 32px;

      @media (max-width: 768px) {
        padding-top: 0;
      }
    }

    .other-projects {
      display: flex;
      flex-direction: row;

      @media (max-width: 900px) {
        flex-direction: column;
      }

      .project-list {
        display: flex;
        flex-direction: row;

        @media (max-width: 768px) {
          flex-direction: column;
        }

        &.left {
          display: flex;
          flex: 60%;
        }

        &.right {
          display: flex;
          flex: 40%;
        }

        .project {
          flex: 33.3%;
          padding: 0 10px;

          @media (max-width: 900px) {
            flex: none;
            margin-right: 20px;
            margin-bottom: 20px;
          }
          @media (max-width: 768px) {
            padding: 0;
            display: flex;
          }
        }
      }

      a {
        color: #fff;
      }
    }

    .project-title .is-hidden {
      @media (max-width: 768px) {
        display: none;
      }
    }

    .project-icon {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 16px;

      @media (max-width: 768px) {
        margin-right: 16px;
      }
    }
  }
</style>
