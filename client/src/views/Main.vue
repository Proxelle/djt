<template lang="pug">
  main.main
    section.main-left
      router-view
    aside.main-right
      autorization
</template>

<script>
import Autorization from '../components/main/Autorization'

export default {
  name: 'main-view',
  components: {
    Autorization
  },
  props: {},
  watch: {
    $route (to, from) {
      console.log('ROUTE', this.$route)
    }
  }
}
</script>

<style scoped lang="scss">
  .main {
    display: flex;
    padding: 0px 10px;
    .main-left {
      flex-grow: 1;
      padding-right: 10px;
    }
    .main-right {
      width: 240px;
      background-color: #e4d7c2;
    }
  }
</style>
