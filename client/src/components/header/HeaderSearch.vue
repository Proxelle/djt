<template lang="pug">
  .header-search(@blur="closeResultSearch")
    .header-search-input(:class="{'header-search-input-focus': focus}")
      .header-search-icon(@click="openResultSearch")
        i.fas.fa-search
      input(v-model="input" placeholder="Поиск" @focus="inputFocus" @blur="inputBlur")
      .header-search-clear(@click="clearInput")
        i.fas.fa-times-circle
    header-search-result(v-if="showResultSearch")
</template>

<script>
import HeaderSearchResult from './HeaderSearchResult'

export default {
  name: 'header-search',
  props: {},
  components: {
    'header-search-result': HeaderSearchResult
  },
  data () {
    return {
      focus: false,
      input: '',
      showResultSearch: false
    }
  },
  methods: {
    inputFocus () {
      this.focus = true
    },
    inputBlur () {
      this.focus = false
    },
    openResultSearch () {
      this.showResultSearch = true
    },
    clearInput () {
      this.input = ''
    },
    closeResultSearch () {
      this.showResultSearch = false
    }
  }
}
</script>

<style scoped lang="scss">
.header-search {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .header-search-input {
    display: flex;
    height: 27px;
    border: 1px #bfbfbf solid;
    box-shadow: inset 0px 1px 2px rgba(0,0,0,0.15);
    color: white;
    background-color: #969662;
    .header-search-icon {
      height: 29px;
      width: 29px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: #474631;
      cursor: pointer;
    }
    input {
      height: 100%;
      border: none;
      outline: none;
      background-color: #969662;
      color: white;
      &::placeholder {
        color: white !important;
      }
    }
    .header-search-clear {
      height: 29px;
      width: 29px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      color: #474631;
      opacity: 0.6;
      cursor: pointer;
    }
  }
  .header-search-input-focus {
    border: 1px #CC0000 solid;
  }
}
</style>
