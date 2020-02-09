<template lang="pug">
  .admin
    .title Админ-панель
    label Раздел
      select(v-model="section")
        option(value="links") Ссылки (Верхнее меню)
        option(value="menu-btns") Меню
        option(value="users") Пользователи
    .section(:is="section")
</template>

<script>
import Links from '../admin/Links'
import MenuBtns from '../admin/MenuBtns'
import Users from '../admin/Users'

export default {
  name: 'admin',
  components: { Links, MenuBtns, Users },
  data () {
    return {
      section: null
    }
  }
}
</script>

<style scoped lang="scss">
  .admin {
    .title {
      font-weight: bold;
      font-size: 20px;
      padding: 8px;
    }
    label {
      padding-bottom: 10px;
      display: block;
      select {
        margin-left: 10px;
      }
    }
  }
</style>
