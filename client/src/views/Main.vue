<template lang="pug">
  main.main
    section.main-left
    aside.main-right
      autorization
</template>

<script>
import Autorization from '../components/main/Autorization'

export default {
  name: 'main-view',
  components: {
    'autorization': Autorization
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
      background-color: #EEEDAE;
    }
  }
</style>
