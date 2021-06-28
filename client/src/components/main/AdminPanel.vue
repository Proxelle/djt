<template lang="pug">
  .admin
    div.title Админ-панель
    .admin-login(v-if="!checkPassword")
      label Логин
        input(v-model="login" type="login")
      label Пароль
        input(v-model="pass" type="password")
      button(@click="submit") Отправить
    .admin-main(v-else)
      select(v-model="activeItem")
        option(v-for="item in adminPanelItems" :value="item.value") {{ item.key }}
      div(:is="activeItem")
</template>

<script>
import Users from '../main/admin/Users'
import Pages from '../main/admin/Pages'

export default {
  name: 'admin-panel',
  data () {
    return {
      checkPassword: false,
      login: '',
      pass: '',
      adminPanelItems: [
        { key: 'Пользователи', value: 'users' },
        { key: 'Страницы', value: 'pages' }
      ],
      activeItem: ''
    }
  },
  components: {
    Users,
    Pages
  },
  methods: {
    async submit (e) {
      e.preventDefault()
      this.checkPassword = await this.$store.dispatch('admin/sendPasswordAdmin', { login: this.login, pass: this.pass })
      this.login = ''
      this.pass = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .admin {
    .title {
      padding: 10px 0px;
      font-size: 16px;
    }
    .admin-login {
      label {
        display: block;
        input {
          display: block;
        }
      }
      button {
        display: block;
        margin-top: 10px;
      }
    }
  }
</style>
