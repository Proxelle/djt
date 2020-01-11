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
        color: #7e7e7e;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
    .vdp-datepicker__calendar {
      width: 203px !important;
      top: 22px;
      left: -28px;
      .day {
        &:hover {
          border: 1px solid #569801 !important;
        }
      }
      .selected {
        background: #569801 !important;
      }
    }
  }
  .Password__strength-meter::before, .Password__strength-meter::after  {
    width: 16% !important;
  }
</style>
