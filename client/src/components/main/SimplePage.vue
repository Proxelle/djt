<template lang="pug">
  .simple-page
    h1 {{ title }}
    .text(v-html="text")
</template>

<script>

export default {
  name: 'simple-page',
  computed: {
    pathItem () {
      let pathItems = this.$route.path.split('/')
      return pathItems[pathItems.length - 1]
    },
    title () {
      return this.$store.getters['main/getPageName'](this.pathItem)
    },
    text () {
      let page = this.$store.getters['main/getPage'](this.pathItem)
      return page && (page.text || '')
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  padding: 10px 5px 20px 5px;
}
.text p {
  padding: 10px 5px;
}
</style>
