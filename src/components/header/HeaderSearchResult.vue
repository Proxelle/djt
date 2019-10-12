<template lang="pug">
    .result-search
        .result-search-title
            span Найдено совпадений ({{ searchResult.length }})
            .result-search-nav
                .result-search-nav-item(v-for="index in navCount()" @click="openPage(index)")
        .result-search-items
            .result-search-item
</template>

<script>
export default {
  name: 'header-search-result',
  data () {
    return {
      page: 1
    }
  },
  computed: {
    searchResult () {
      let result = []
      let listItemsSearch = [
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
      ]
      for (let i = this.page * 3; i < 10; i++) {
        result.push(listItemsSearch)
      }
      return result
    }
  },
  methods: {
    navCount () {
      return Math.ceil(this.searchResult.length / 3)
    },
    openPage (index) {
      this.page = index
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
