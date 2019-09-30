<template lang="pug">
    nav.header-nav
        .header-nav-item(v-for="item in menu") {{ item.name }}
            .item-list
                .item-list-btn(v-for="btn in item.list") {{ btn.name }}
</template>

<script>
export default {
  name: 'header-nav',
  props: {},
  data () {
    return {
      menu: [
        { name: 'Главная', link: 'home', list: [{ name: '123', link: 'home' }, { name: '1131223', link: 'home' }, { name: '12312313', link: 'home' }] },
        { name: 'Магазин', link: 'home', list: [{ name: '123', link: 'home' }, { name: '1131223', link: 'home' }, { name: '12312313', link: 'home' }] },
        { name: 'Ссылки', link: 'home', list: [{ name: '123', link: 'home' }, { name: '1131223', link: 'home' }, { name: '12312313', link: 'home' }] },
        { name: 'Публикации', link: 'home', list: [{ name: '123', link: 'home' }, { name: '1131223', link: 'home' }, { name: '12312313', link: 'home' }] }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    .header-nav {
        position: relative;
        display: flex;
        align-items: center;
        height: 50px;
        color: white;
        font-size: 17px;
        font-weight: bold;
        .header-nav-item {
            padding: 0px 24px;
            height: 38px;
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
            &:hover {
                background-color: #EEEDAE;
                color: black;
            }
            &:hover > .item-list {
                display: block
            }
            .item-list {
                display: none;
                position: absolute;
                top: 38px;
                left: 0px;
                background-color: #EEEDAE;
                height: auto;
                margin: 0;
                padding: 0;
                width: 320px;
                z-index: 99;
                border-top: 2px solid #FFFFFF;
                box-shadow: 2px 5px 8px #000000;
                .item-list-btn {
                    padding: 10px;
                    font-size: 12px;
                    &:hover {
                        color: white;
                        background-color: #606034;
                    }
                }
            }
        }
    }
</style>
