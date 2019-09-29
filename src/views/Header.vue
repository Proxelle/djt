<template lang="pug">
  header
    .header-line-1
      header-search
      header-links
    .header-line-2
</template>

<script>
import headerSearch from '../components/header/HeaderSearch'
import HeaderLinks from '../components/header/HeaderLinks'

export default {
  name: 'header',
  components: {
    'header-search': headerSearch,
    'header-links': HeaderLinks
  },
  props: {}
}
</script>

<style scoped lang="scss">
  .header-line-1 {
    height: 45px;
    display: flex;
    justify-content: space-between;
  }
</style>
