<template lang="pug">
  .registration-cont
    .registration
      .registration-close(@click="close")
        i.fas.fa-times
      .registration-title
        span.registration-title-text Регистрация
        span.registration-required-fields * - обязательные поля
      .registration-input-section
        label Имя *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input
      .registration-input-section
        label E-mail *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input
      .registration-input-section
        label Пароль *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input
      .registration-input-section
        label Повторите пароль *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input
      .registration-button
        .registration-button-btn Отправить
</template>

<script>
export default {
  name: 'registration',
  methods: {
    close () {
      console.log(this.$modal)
      this.$modal.hide('registration')
    }
  }
}
</script>

<style scoped lang="scss">
  .registration-cont {
    padding: 3px;
    border: 1px #CBCBCB solid;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    .registration {
      padding: 15px;
      background-color: #ffffff;
      border-radius: 1px;
      box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
      position: relative;
      .registration-close {
        height: 18px;
        width: 18px;
        position: absolute;
        top: 0px;
        right: 0px;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.4), inset 1px 1px 0px rgba(255,255,255,0.5);
        background-color: #474718;
        border: 1px solid #474718;
        color: black;
        text-shadow: white;
        text-shadow: 0.4px 0.4px 0.4px lightgrey;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease-out;
        &:hover {
          background-color: #606034;
        }
        &:active {
          background-color: #474718;
          box-shadow: 1px 1px 0 rgba(255,255,255,0.8), inset 1px 1px 3px rgba(0,0,0,0.3);
        }
      }
      .registration-title {
        margin-bottom: 15px;
        span.registration-title-text {
          font-size: 14px;
          color: #7e7e7e;
          display: block;
        }
        span.registration-required-fields {
          font-size: 11px;
          color: #569801;
          margin-top: -2px;
          display: block;
        }
      }
      .registration-input-section {
        margin-bottom: 15px;
        label {
          color: #7e7e7e;
          font-size: 11px;
        }
        .registration-input {
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
          .registration-input-icon {
            width: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
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
      }
      .registration-button {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 8px;
        .registration-button-btn {
          box-shadow: 1px 1px 2px rgba(0,0,0,0.4), inset 1px 1px 0px rgba(255,255,255,0.5);
          display: inline-block;
          padding: 5px 15px;
          background-color: #474718;
          color: white;
          border: 1px solid #474718;
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
    }
  }
</style>