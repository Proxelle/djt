<template lang="pug">
  header
    .header-line-1
      header-search
      header-links
    .header-line-2
      .header-line-white
    header-nav
</template>

<script>
import headerSearch from '../components/header/HeaderSearch'
import HeaderLinks from '../components/header/HeaderLinks'
import HeaderNav from '../components/header/HeaderNav'

export default {
  name: 'header',
  components: {
    'header-search': headerSearch,
    'header-links': HeaderLinks,
    'header-nav': HeaderNav
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
</style>
