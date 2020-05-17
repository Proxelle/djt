<template lang="pug">
  #app
    header-view
    main-view
    footer-view
</template>

<script>
import HeaderView from './views/Header'
import MainView from './views/Main'
import FooterView from './views/Footer'

export default {
  components: {
    HeaderView,
    MainView,
    FooterView
  },
  created () {
    this.$store.dispatch('main/getPages')
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
      left: -11px;
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
