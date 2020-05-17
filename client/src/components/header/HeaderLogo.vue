<template lang="pug">
  .logo
    router-link.logo-wrapper(:to="'/'")
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
    margin-left: 10px;
    flex-grow: 1;
    .logo-wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      color: black;
      text-decoration: none;
    }
  }
</style>
