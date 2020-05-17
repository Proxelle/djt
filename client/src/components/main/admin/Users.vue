<template lang="pug">
.users
  .user
    .login.title Логин
    .rights.title Права
  .user(v-for="user in users" @click="editUser(user.email)")
    .login(:title="user.email") {{ user.email }}
    .rights(:title="user.rights") {{ user.rights }}
</template>

<script>
import EditUser from './EditUser'

export default {
  name: 'users',
  mounted () {
    this.$store.dispatch('admin/getUsers')
  },
  computed: {
    users () {
      return this.$store.getters['admin/getUsersList']
    }
  },
  methods: {
    editUser (login) {
      this.$modal.show(EditUser, {
        login
      }, {
        height: 300,
        width: 350,
        pivotY: 0.4
      })
    }
  }
}
</script>

<style scoped lang="scss">
.users {
  padding-top: 10px;
  width: 400px;
  .user {
    display: flex;
    border-top: 1px solid grey;
    border-right: 1px solid grey;
    border-left: 1px solid grey;
    cursor: pointer;
    &:last-child {
      border-bottom: 1px solid grey;
    }
    .title {
      font-weight: bold;
      cursor: default;
    }
    .login {
      flex-grow: 1;
      border-right: 1px solid grey;
    }
    .rights {
      flex-basis: 50px;
    }
  }
}
</style>
