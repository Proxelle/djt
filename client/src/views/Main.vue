<template lang="pug">
  main.main
    section.main-left
      admin
    aside.main-right
      autorization
</template>

<script>
import Autorization from '../components/main/Autorization'
import Admin from '../components/main/Admin'

export default {
  name: 'main-view',
  components: {
    Autorization,
    Admin
  },
  props: {}
}
</script>

<style scoped lang="scss">
  .main {
    display: flex;
    padding: 0px 10px;
    .main-left {
      flex-grow: 1;
    }
    .main-right {
      width: 240px;
      background-color: #e4d7c2;
    }
  }
</style>
