<template lang="pug">
  .header-links
    .menu-links(@click="toggleMenu")
      i.fas.fa-bars
    .header-links-block(v-if="widthScreen > 780")
      .header-link-wrapper(v-for="item in links")
        router-link.header-link(:to="item.link ? item.link : '/'") {{ item.name }}
    .header-links-block(v-if="widthScreen <= 780 && showHeaderLinks")
      .header-link-wrapper(v-for="item in links")
        router-link.header-link(:to="item.link") {{ item.name }}
</template>

<script>
export default {
  name: 'header-links',
  data () {
    return {
      showHeaderLinks: false
    }
  },
  created () {
    this.$store.dispatch('main/getlinksPanel')
  },
  computed: {
    links () {
      return this.$store.getters['main/getLinksPanel']
    },
    widthScreen () {
      return this.$store.getters['main/getScreenWidth']
    }
  },
  methods: {
    toggleMenu () {
      this.showHeaderLinks = !this.showHeaderLinks
    }
  }
}
</script>

<style scoped lang="scss">
  .header-links {
    display: flex;
    align-items: center;
    position: relative;
    .menu-links {
      font-size: 20px;
      color: #2b4423;
      margin-right: 10px;
      cursor: pointer;
      display: none;
    }
    .header-links-block {
      display: flex;
      .header-link-wrapper {
        .header-link {
          border-left: 1px solid #2b4423;
          border-right: 1px solid #2b4423;
          color: #2b4423;
          margin: 0 -1px 0 0;
          padding: 0 7px;
          cursor: pointer;
          font-weight: bold;
          line-height: 15px;
        }
      }
    }
  }
  @media (max-width: 861px) {
    .header-link {
      font-size: 11px;
    }
  }
  @media (max-width: 780px) {
    .menu-links {
      display: block !important;
    }
    .header-links-block {
      display: block !important;
      position: absolute;
      top: 26px;
      right: 5px;
      background-color: white;
      border: 1px solid #2b4423;
      z-index: 100;
      padding: 10px;
      .header-link-wrapper {
        display: block;
        padding: 5px 0px !important;
        font-size: 13px;
        .header-link {
          border-left: none !important;
          border-right: none !important;
        }
      }
    }
  }
</style>
