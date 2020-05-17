<template lang="pug">
  .links
    .title Ссылки
    .links-body
      .title-panel
        .title-panel-number №
        .title-panel-name Название
        .title-panel-link Ссылка
      .links-item(v-for="(item, index) in links")
        span {{ index +1 }}
        input( v-model="links[index].name")
        input( v-model="links[index].link")
      button(@click="save") Сохранить
      span.error(v-if="error") Данные не изменены!
</template>

<script>
export default {
  name: 'links',
  data () {
    return {
      links: [],
      error: false
    }
  },
  mounted () {
    this.links = JSON.parse(JSON.stringify(this.$store.getters['main/getLinksPanel']))
  },
  methods: {
    save (e) {
      e.preventDefault()
      let result = this.$store.dispatch('admin/changeLinksPanel', JSON.parse(JSON.stringify(this.links)))
      this.error = result
    }
  }
}
</script>

<style scoped lang="scss">
  .links {
    .title {
      margin: 0px 0px 10px 10px;
      font-weight: bold;
    }
    .links-body {
      .title-panel {
        display: flex;
        .title-panel-number {
          width: 20px;
        }
        div {
          width: 180px;
        }
      }
      .links-item {
        margin-bottom: 5px;
        display: block;
        span {
          display: inline-block;
          width: 20px;
        }
        input {
          width: 180px;
        }
      }
      button {
        margin-left: 20px;
      }
      .error {
        margin-left: 10px;
      }
    }
  }
  .error {
    color: red;
  }
</style>
