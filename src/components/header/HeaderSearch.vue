<template lang="pug">
  .header-search
    .header-search-input(:class={'header-search-input-focus': qwe})
      .header-search-icon
      input(placeholder="Поиск" @focus="inputFocus" @blur="inputBlur")
      .header-search-clear
</template>

<script>
export default {
  name: 'header-search',
  props: {},
  data () {
    return {
      focus: true,
      qwe: true
    }
  },
  methods: {
    inputFocus () {
      console.log('inputFocus')
      this.focus = true
      console.log(this.focus)
    },
    inputBlur () {
      console.log('inputBlur')
      this.focus = false
      console.log(this.focus)
    }
  }
}
</script>

<style scoped lang="scss">
.header-search {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  .header-search-input {
    height: 27px;
    border: 1px #bfbfbf solid;
    box-shadow: inset 0px 1px 2px rgba(0,0,0,0.15);
    color: white;
    input {
      height: 100%;
      border: none;
      background-color: #969662;
      outline: none;
      &::placeholder {
        color: white !important;
      }
    }
  }
  .header-search-input-focus {
    border: 1px #CC0000 solid;
  }
}
</style>
