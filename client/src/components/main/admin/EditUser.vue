<template lang="pug">
  .user
    .title Редактирование пользователя
    .user-field
      label id
      span {{ user.id }}
    .user-field
      label Фамилия
      input(v-model="user.lastname")
    .user-field
      label Имя
      input(v-model="user.firstname")
    .user-field
      label Отчество
      input(v-model="user.patronymic")
    .user-field
      label Возраст
      input(v-model="user.age")
    .user-field
      label Страна
      input(v-model="user.country")
    .user-field
      label Город
      input(v-model="user.city")
    .user-field
      label Логин/Почта
      span {{ user.email }}
    .user-field
      label пароль
      input(v-model="user.pass")
    .user-field
      label Права
      input(v-model="user.rights")
    .buttons
      button(@click="cancel") Отмена
      button(@click="save") Сохранить
</template>

<script>
export default {
  name: 'edit-user',
  props: ['login'],
  data () {
    return {
      unchangedUser: {},
      user: {}
    }
  },
  async mounted () {
    let user = await this.$store.dispatch('admin/getUser', this.login)
    this.user = user.data
    this.unchangedUser = JSON.parse(JSON.stringify(user.data))
  },
  methods: {
    save () {
      let user = {}
      for (let key in this.user) {
        if (key === 'id' || this.user[key] !== this.unchangedUser[key]) user[key] = this.user[key]
      }
      if (Object.keys(user).length > 1) this.$store.dispatch('admin/setUser', user)
      this.cancel()
    },
    cancel () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
  .user {
    .title {
      padding-bottom: 10px;
      font-weight: bold;
    }
    padding: 10px;
    .user-field {
      display: flex;
      align-items: center;
      label {
        margin-right: 10px;
        width: 80px;
      }
      span {
        border: 1px solid #A9A9A9;
        width: 199px;
        height: 17px;
      }
    }
    .buttons {
      text-align: center;
      padding: 10px;
    }
  }
</style>
