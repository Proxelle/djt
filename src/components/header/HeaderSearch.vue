<template lang="pug">
  .header-search(@blur="closeResultSearch")
    .header-search-input(:class="{'header-search-input-focus': focus}")
      .header-search-icon(@click="search")
        i.fas.fa-search
      input(v-modal="input" placeholder="Поиск" @focus="inputFocus" @blur="inputBlur")
      .header-search-clear(@click="clear")
        i.fas.fa-times-circle
    .result-search(v-if="showResultSearch")
          .result-search-title
            span Найдено совпадений ({{ searchResult.length }})
            .result-search-nav
              .result-search-nav-item(v-for="index in navCount()" @click="openPage(index)")
          .result-search-item
</template>

<script>
export default {
  name: 'header-search',
  props: {},
  data () {
    return {
      focus: false,
      input: '',
      showResultSearch: false
    }
  },
  computed: {
    searchResult () {
      return [
        {
          page: '1',
          description: '1111111'
        },
        {
          page: '2',
          description: '2222222'
        },
        {
          page: '3',
          description: '33333333'
        },
        {
          page: '4',
          description: '44444444'
        }
      ] || []
    }
  },
  methods: {
    inputFocus () {
      this.focus = true
    },
    inputBlur () {
      this.focus = false
    },
    search () {
      this.showResultSearch = !this.showResultSearch
    },
    clear () {
      this.input = ''
    },
    navCount () {
      return Math.ceil(this.searchResult.length / 3)
    },
    openPage (index) {
      console.log(index)
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
  .result-search {
    width: 300px;
    position: absolute;
    z-index: 500;
    top: 30px;
    left: 0px;
    background-color: white;
    -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    .result-search-title {
      background-color: #F2F2F2;
      border-top: 1px solid #cdcdcd;
      text-transform: uppercase;
      height: 27px;
      span {
        display: inline-block;
        color: #4E6170;
        margin-left: 10px;
        margin-top: 5px;
      }
      .result-search-nav {
        display: inline-block;
        float: right;
        height: 20px;
        margin-right: 6px;
        .result-search-nav-item {
          height: 6px;
          width: 6px;
          border-radius: 5px;
          border: 2px solid #4E6170;
          background-color: #4E6170;
          display: inline-block;
          margin-left: 2px;
          margin-top: 8px;
          cursor: pointer;
        }
        .result-search-nav-item-active {
          background-color: transparent;
        }
      }
    }
  }
}
</style>
