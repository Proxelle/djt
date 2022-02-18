<template lang="pug">
  .logo
    router-link.logo-wrapper(:to="'/'" title="Национальный клуб породы Немецкий Охотничий Терьер (Ягдтерьер)")
      img(src="../../assets/img/logo/logo_ru.png")
      .logo-name Национальный клуб породы Немецкий Охотничий Терьер (Ягдтерьер)
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
    .logo-wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      color: black;
      text-decoration: none;
      width: 240px;
      min-width: 130px;
      img {
        height: 125px;
      }
      .logo-name {
        padding-top: 3px;
        text-align: center;
        font-weight: 700;
      }
    }
  }
  @media (max-width: 704px) {
    .logo-wrapper {
      width: auto !important;
      img {
        height: 80px !important;
      }
    }
  }
  @media (max-width: 580px) {
    .logo-wrapper {
      flex-direction: inherit !important;
      img {
        height: 40px !important;
      }
    }
  }
  @media (max-width: 380px) {
    .logo-wrapper {
      justify-content: flex-start !important;
      min-width: 0px !important;
     .logo-name {
        display: none;
      }
    }
  }
</style>
