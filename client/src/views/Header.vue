<template lang="pug">
  header
    .header-line-0
      header-logo.header-logo(v-if="screenWidth <= 580")
      .buttons(v-if="screenWidth < 705")
        .button(@click="openAutorization") Авторизация
        .span |
        .button(@click="openRegistration") Регистрация
    .header-line-1
      header-search
      header-links
    .header-line-2
      .header-line-white
    .header-nav-wrapper
      header-nav
    .header-line-3
      header-bread-crumbs
      header-logo(v-if="screenWidth > 580")
</template>

<script>
import HeaderSearch from '../components/header/HeaderSearch'
import HeaderLinks from '../components/header/HeaderLinks'
import HeaderNav from '../components/header/HeaderNav'
import HeaderLogo from '../components/header/HeaderLogo'
import HeaderBreadCrumbs from '../components/header/HeaderBreadCrumbs'
import Registration from '../components/modal/Registration'
import Autorization from '../components/modal/Autorization'

export default {
  name: 'header-view',
  components: {
    HeaderSearch,
    HeaderLinks,
    HeaderNav,
    HeaderLogo,
    HeaderBreadCrumbs
  },
  computed: {
    screenWidth () {
      return this.$store.getters['main/getScreenWidth']
    }
  },
  methods: {
    openRegistration () {
      this.$modal.show(Registration, {}, {
        height: 'auto',
        width: 240,
        pivotY: 0.4
      })
    },
    openAutorization () {
      this.$modal.show(Autorization, {}, {
        height: 'auto',
        width: 240,
        pivotY: 0.4
      })
    }
  }
}
</script>

<style scoped lang="scss">
header {
  .header-line-0 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #e4d7c2;
    .header-logo {
        margin: 5px;
    }
    .buttons {
      display: flex;
      align-items: center;
      .button {
        margin: 7px;
        font-weight: 700;
        font-size: 11px;
        text-decoration: underline;
        color: #2b4423;
        cursor: pointer;
      }
    }
  }
  .header-line-1 {
    height: 25px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .header-line-2 {
    background-color: #2b4423;
    position: absolute;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 0;
    min-width: 900px;
    .header-line-white {
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      height: 38px;
      margin-top: 4px;
    }
  }
  .header-nav-wrapper {
    position: relative;
  }
  .header-line-3 {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
}
@media (max-width: 900px) {
  .header-line-2 {
    min-width: 0 !important;
  }
}
@media (max-width: 580px) {
  .header-line-2 {
    height: 203px !important;
    .header-line-white {
      height: 191px !important;
    }
  }
  .header-line-0 {
    justify-content: space-between !important;
  }
}
</style>
