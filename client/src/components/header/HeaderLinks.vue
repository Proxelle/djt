<template lang="pug">
  .header-links
    div(v-for="item in links")
      router-link.header-link(:to="item.link") {{ item.name }}
</template>

<script>
export default {
  name: 'header-links',
  created () {
    this.$store.dispatch('main/getlinksPanel')
  },
  computed: {
    links () {
      return this.$store.getters['main/getLinksPanel']
    }
  }
}
</script>

<style scoped lang="scss">
  .header-links {
    display: flex;
    align-items: center;
    .header-link {
      border-left: 1px solid #2b4423;
      border-right: 1px solid #2b4423;
      color: #2b4423;
      margin: 0 -1px 0 0;
      padding: 0 7px;
      cursor: pointer;
      font-weight: bold;
      line-height: 15px;
    }
  }
</style>
