<template lang="pug">
    .links
      .title Ссылки
      .links-body
        .links-item(v-for="(item, index) in links")
          span {{ index +1 }}
          input( v-model="links[index].name")
          input( v-model="links[index].link")
        .btn(@click="test")  asdasd
</template>

<script>
export default {
  name: 'links',
  data () {
    return {
      link1: ''
    }
  },
  computed: {
    links () {
      return this.$store.getters['getLinksPanel']
    }
  },
  methods: {
    test () {
      console.log(this.links)
      this.$store.dispatch('changeLinksPanel', this.links)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
