<template lang="pug">
  nav.header-nav
    div(v-for="(item, i) in menu" @click="toggleMenu(i)" @mouseenter="openMenu(i)" @mouseleave="closeMenu(i)")
      router-link.header-nav-item(:to="item.link") {{ item.name }}
        .item-list(v-if="showMenu[i] && getSubMenu(item.link).length")
          div(v-for="btn in getSubMenu(item.link)" @click="closeMenu")
            router-link.item-list-btn(:to="btn.link") {{ btn.name }}
</template>

<script>
export default {
  name: 'header-nav',
  data () {
    return {
      showMenu: []
    }
  },
  created () {
    this.$store.dispatch('main/getNavMenu')
    this.$store.dispatch('main/getSubNavMenu')
  },
  mounted () {
    for (let i = 0; i < 7; i++) {
      this.showMenu[i] = false
    }
  },
  computed: {
    menu () {
      return this.$store.getters['main/getNavMenu']
    }
  },
  methods: {
    getSubMenu (parent) {
      let menu = this.$store.getters['main/getSubNavMenu']
      return menu.filter(item => item.parent === parent)
    },
    toggleMenu (i) {
      this.showMenu.forEach((item, index) => {
        if (index !== i) this.$set(this.showMenu, index, false)
      })
      this.$set(this.showMenu, i, !this.showMenu[i])
    },
    closeMenu (i) {
      if (window.innerWidth <= 580) return
      this.$set(this.showMenu, i, false)
    },
    openMenu (i) {
      if (window.innerWidth <= 580) return
      this.$set(this.showMenu, i, true)
    }
  }
}
</script>

<style scoped lang="scss">
  .header-nav {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    color: white;
    font-size: 17px;
    font-weight: bold;
    .header-nav-item {
      padding: 0px 20px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      text-decoration: none;
      color: white;
      text-align: center;
      &:hover {
        background-color: #e4d7c2;
        color: black;
      }
      // &:hover > .item-list {
      //   display: block !important;
      // }
      .item-list {
        position: absolute;
        top: 38px;
        left: 0px;
        background-color: #e4d7c2;
        height: auto;
        margin: 0;
        padding: 0;
        width: 320px;
        z-index: 99;
        border-top: 2px solid #FFFFFF;
        box-shadow: 2px 5px 8px #000000;
        .item-list-btn {
          display: block;
          text-decoration: none;
          color: black;
          padding: 10px;
          font-size: 12px;
          &:hover {
            color: white;
            background-color: #2b4423;
          }
        }
      }
    }
  }
  @media (max-width: 878px) {
    .header-nav {
      font-size: 14px;
      .header-nav-item {
        padding: 0px 10px !important;
        .item-list {
          width: 220px;
        }
      }
    }
  }
  @media (max-width: 703px) {
    .header-nav {
      font-size: 12px;
      .header-nav-item {
        padding: 0px 5px !important;
      }
    }
  }
  @media (max-width: 580px) {
    .header-nav {
      flex-direction: column;
      height: auto;
      padding: 7px 0px;
      .header-nav-item {
        display: flex;
        justify-content: flex-start;
        height: auto;
        padding: 6px 15px !important;
        .item-list {
          width: 100%;
          top: 28px;
          left: 0px;
          .item-list-btn {
            display: flex;
          }
        }
      }
    }
    .header-nav div{
      width: 100%;
    }
  }
</style>
