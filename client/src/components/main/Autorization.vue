<template lang="pug">
  .autorization
    .autorization-title Авторизация
    .autorization-section(v-if="!authorized")
      .login.autorization-input
        .autorization-input-icon
          i.fas.fa-user-alt
        input(placeholder="Логин / E-mail" v-model="login")
      .password.autorization-input
        .autorization-input-icon
          i.fas.fa-user-alt
        input(placeholder="Пароль" v-model="pass" type="password")
      .login-button
        .login-button-btn(@click="enter") Войти
      .get-password
        .get-password-btn(@click="getPass") Забыли пароль?
      .registration-section
        .registration-button-btn(@click="openRegistration") Регистрация
    .authorized-section(v-else)
      div Добро пожаловать!
</template>

<script>
import Registration from './Registration'

export default {
  name: 'autorization',
  data () {
    return {
      login: '',
      pass: '',
      authorized: false
    }
  },
  methods: {
    openRegistration () {
      this.$modal.show(Registration, {
      }, {
        height: 'auto',
        width: 240,
        pivotY: 0.4
      })
    },
    async enter () {
      if (!this.login.length && !this.pass.length) return
      let res = await this.$store.dispatch('main/checkLogin', { login: this.login, pass: this.pass })
      if (res) this.authorized = true
      else {
        alert('Неверный логин или пароль!')
        this.login = ''
        this.pass = ''
      }
    },
    getPass () {
      console.log('getPass')
    }
  }
}
</script>

<style scoped lang="scss">
  .autorization-title {
    text-align: center;
    background-color: #2b4423;
    color: white;
    font-weight: bold;
    font-size: 17px;
    padding: 5px 0px;
  }
  .autorization-section {
    padding: 10px 15px;
    .autorization-input {
      width: 100%;
      box-shadow: 1px 1px 0 rgba(255,255,255,0.8), inset 1px 1px 3px rgba(0,0,0,0.3);
      height: 28px;
      outline: none;
      background-color: #f4f4f4;
      border: none;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      color: #BABABA;
      .autorization-input-icon {
        width: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 5px;
      }
      input {
        border: none;
        outline: none;
        background-color: transparent;
        color: #7e7e7e;
        &::placeholder {
          color: #BABABA !important;
        }
      }
    }
    .login-button {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 8px;
      .login-button-btn {
        box-shadow: 1px 1px 2px rgba(0,0,0,0.4), inset 1px 1px 0px rgba(255,255,255,0.5);
        display: inline-block;
        padding: 5px 15px;
        background-color: #2b4423;
        color: white;
        border: 1px solid #2b4423;
        cursor: pointer;
        transition: all .3s ease-out;
        &:hover {
          background-color: #990000;
        }
        &:active {
          background-color: #990000;
          box-shadow: 1px 1px 0 rgba(255,255,255,0.8), inset 1px 1px 3px rgba(0,0,0,0.3);
        }
      }
    }
    .get-password {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px #ffffff solid;
      box-shadow: 0px 1px 0px #FFFFFF;
      .get-password-btn {
        color: #569801;
        font-size: 12px;
        cursor: pointer;
      }
      &:hover {
        color: #569801;
        text-decoration: underline;
      }
    }
  }
  .registration-section {
    display: flex;
    justify-content: flex-end;
    .registration-button-btn {
      box-shadow: 1px 1px 2px rgba(0,0,0,0.4), inset 1px 1px 0px rgba(255,255,255,0.5);
      display: inline-block;
      padding: 6px 0px;
      width: 100%;
      background-color: #2b4423;
      color: white;
      border: 1px solid #2b4423;
      cursor: pointer;
      text-align: center;
      transition: all .3s ease-out;
      &:hover {
        background-color: #2b4423d9;
      }
      &:active {
        background-color: #2b4423;
        box-shadow: 1px 1px 0 rgba(255,255,255,0.8), inset 1px 1px 3px rgba(0,0,0,0.3);
      }
    }
  }
</style>
