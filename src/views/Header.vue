<template lang="pug">
  header
    .header-line-1
      header-search
      header-links
    .header-line-2
      .header-line-white
    header-nav
    .header-line-3
      header-logo
      header-bread-crumbs
</template>

<script>
import headerSearch from '../components/header/HeaderSearch'
import HeaderLinks from '../components/header/HeaderLinks'
import HeaderNav from '../components/header/HeaderNav'
import HeaderLogo from '../components/header/HeaderLogo'
import HeaderBreadCrumbs from '../components/header/HeaderBreadCrumbs'

export default {
  name: 'header-view',
  components: {
    'header-search': headerSearch,
    'header-links': HeaderLinks,
    'header-nav': HeaderNav,
    'header-bread-crumbs': HeaderLogo,
    'header-logo': HeaderBreadCrumbs
  },
  props: {}
}
</script>

<style scoped lang="scss">
  .header-line-1 {
    height: 25px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .header-line-2 {
    background-color: #474718;
    position: absolute;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 0;
    .header-line-white {
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      height: 38px;
      margin-top: 4px;
    }
  }
  .header-line-3 {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
</style>
