<template lang="pug">
  .logo
    img(src="https://www.djt-club.de/templates/webman/images/djt-logo.png")
    .logo-name Название компании
</template>

<script>
export default {
  name: 'header-logo'
}
</script>

<style scoped lang="scss">
  .logo {
    background: #e4d7c2;
    flex-grow: 1;
    margin-left: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
</style>
