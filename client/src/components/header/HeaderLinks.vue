<template lang="pug">
  .header-links
    a.header-link(v-for="item in links") {{ item.name }}
</template>

<script>
export default {
  name: 'header-links',
  props: {},
  data () {
    return {
      links: [
        { name: 'Главная', link: 'home' },
        { name: 'Магазин', link: 'home' },
        { name: 'Ссылки', link: 'home' },
        { name: 'Публикации', link: 'home' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .header-links {
    display: flex;
    align-items: center;
    .header-link {
      border-left: 1px solid #606034;
      border-right: 1px solid #606034;
      color: #606034;
      margin: 0 -1px 0 0;
      padding: 0 7px;
      cursor: pointer;
      font-weight: bold;
      line-height: 15px;
    }
  }
</style>
