<template lang="pug">
  .admin
    span Админ-панель
    .admin-login(v-if="!checkPassword")
      label Пароль
        input(v-model=" password" type="password")
      button(@click="submit") Отправить
    .admin-main(v-else)
      
</template>

<script>

export default {
  name: 'admin',
  data () {
    return {
      checkPassword: false,
      password: ''
    }
  },
  methods: {
    async submit (e) {
      e.preventDefault()
      this.checkPassword = await this.$store.dispatch('sendPasswordAdmin', this.password)
      this.password = ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
