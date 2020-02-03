<template lang="pug">
  footer
    span | Какой-то текст в футере |
</template>

<script>
export default {
  name: 'footer-view',
  props: {}
}
</script>

<style scoped lang="scss">
  footer {
    background-color: #2b4423;
    margin: 10px;
    color: white;
    padding: 8px 0px;
    text-align: center;
  }
</style>
