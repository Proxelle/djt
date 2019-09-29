<template lang="pug">
  .header-search
    .header-search-input
      .header-search-icon
      input
      .header-search-clear
</template>

<script>
export default {
  name: 'header-search',
  props: {}
}
</script>

<style scoped lang="scss">
.header-search {
  width: 100%;
  display: flex;
  align-items: center;
  .header-search-input {
    height: 27px;
    border: 1px #bfbfbf solid;
  }
  input {
    height: 100%;
  }
}

</style>
