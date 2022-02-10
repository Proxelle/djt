<template lang="pug">
    .result-search
      .result-search-title
        span Найдено совпадений ({{ searchResult.length }})
        .result-search-nav
          .result-search-nav-item(v-for="index in navCount()" @click="openPage(index)" :class="{'result-search-nav-item-active': index === page}")
      .result-search-items
        transition-group(name="list")
          .result-search-item(v-for="item in showSearchResult" :key="item")
            .result-search-item-page {{ item.page }}
            .result-search-item-description {{ item.description }}
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
      return [
        {
          page: '1asdasdasdasd asd asdas dasdasdas dasdasd asdasda adasasd  asdas asdasdasdasdasda asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd ',
          description: '1asdasdasdasd asd asdas dasdasdas dasdasd asdasda adasasd  asdas   fafdasfsdfsdf dsfdsf sdfdsfdsfdsfdsfds sdfdsfdsf sdfsdfdsf'
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
    },
    showSearchResult () {
      let result = []
      for (let i = (this.page * 3) - 3; i < this.page * 3; i++) {
        this.searchResult[i] && result.push(this.searchResult[i])
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
.list-enter-active, .list-leave-active {
  transition: all 0.4s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.list-move {
  transition: transform 0.4s;
}

.result-search {
  width: 300px;
  position: absolute;
  z-index: 500;
  top: 27px;
  left: 0px;
  background-color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  border: 1px solid #cdcdcd;
  .result-search-title {
    background-color: #F2F2F2;
    border-bottom: 1px solid #cdcdcd;
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
  .result-search-items {
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    .result-search-item {
      background-color: #ffffff;
      height: 65px;
      padding: 5px;
      border-bottom: 1px solid #cdcdcd;
      &:last-child {
        border-bottom: none;
      }
      .result-search-item-page {
        color: #4E6170;
        font-weight: bold;
        width: 277px;
        overflow: hidden;
        text-align: justify;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .result-search-item-description {
        width: 277px;
        overflow: hidden;
        text-align: justify;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
