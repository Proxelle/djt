<template lang="pug">
  .bread-crumbs
    img(src="../../assets/img/breadCrumbs.jpg")
    .bread-crumbs-block
      span Текущая Страница:
      .bread-crumbs-item(v-for="crumb in crumbs")
        .triangle
        router-link.bread-crumb-active(:to="crumb.link || ''") {{ crumb.name }}
</template>

<script>
export default {
  name: 'header-bread-crumbs',
  computed: {
    crumbs () {
      let result = []
      let pathElements = this.$route.path.split('/')
      let crumbs = this.$store.getters['main/getPage'](pathElements[pathElements.length - 1]) || {}
      if ('parent' in crumbs) {
        let parentName = this.$store.getters['main/getPageName'](crumbs.parent)
        result.push({ name: parentName, link: crumbs.parent })
      }
      result.push({ name: crumbs.name, link: crumbs.link })
      return result
    }
  }
}
</script>

<style scoped lang="scss">
  .bread-crumbs {
    position: relative;
    overflow: hidden;
    img {
        display: block;
        width: 100%;
    }
    .bread-crumbs-block {
      background-color: rgba(43, 68, 35, 0.7);
      height: 35px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      z-index: 10;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-left: 5px;
      color: white;
      .bread-crumbs-item {
        display: flex;
        align-items: center;
        &:last-child {
          .bread-crumb-active {
            &:hover {
              cursor: default;
              text-decoration: none;
              color: white;
            }
          }
        }
        .triangle {
          width: 0;
          height: 0;
          border-top: 4px solid transparent;
          border-left: 7px solid #FF8400;
          border-bottom: 4px solid transparent;
          margin: 0px 5px 0px 5px;
        }
        .bread-crumb-active {
          text-decoration: none;
          color: white;
          padding-top: 1px;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
            color: #CC0000;
          }
        }
      }
    }
  }
  @media (max-width: 780px) {
    .bread-crumbs-block {
      height: auto;
    }
  }
</style>
