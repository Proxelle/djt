<template lang="pug">
  #app
    header-view
    main-view
    footer-view
</template>

<script>
import headerView from './views/Header'
import mainView from './views/Main'
import footerView from './views/Footer'

export default {
  components: {
    'header-view': headerView,
    'main-view': mainView,
    'footer-view': footerView
  }
}
</script>

<style lang="scss">
  .v--modal {
    overflow: visible !important;
  }
  .vdp-datepicker {
    div {
      input {
        background-color: transparent;
        border: none;
        outline: none;
      }
    }
    .vdp-datepicker__calendar {
      width: 173px !important;
    }
  }
</style>
