<template lang="pug">
  main.main
    section.main-left
      router-view
    aside.main-right(v-if="widthScreen >= 705")
      autorization
</template>

<script>
import Autorization from '../components/modal/Autorization'

export default {
  name: 'main-view',
  components: {
    Autorization
  },
  computed: {
    widthScreen () {
      return this.$store.getters['main/getScreenWidth']
    }
  }
}
</script>

<style scoped lang="scss">
  .main {
    display: flex;
    padding: 0px 10px;
    .main-left {
      flex: 1 1;
      padding: 0px 10px 30px 10px;
      font-size: 14px;
    }
    .main-right {
      width: 240px;
    }
  }
</style>
