<template lang="pug">
  .simple-page
    h1 {{ title }}
</template>

<script>

export default {
  name: 'simple-page',
  computed: {
    title () {
      let pathItems = this.$route.path.split('/')
      return this.$store.getters['main/getPageName'](pathItems[pathItems.length - 1])
    }
  }
}
</script>

<style scoped lang="scss">
</style>
