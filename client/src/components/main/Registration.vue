<template lang="pug">
  .registration-cont
    .registration
      .registration-close(@click="close")
        i.fas.fa-times
      .registration-title
        span.registration-title-text Регистрация
        span.registration-required-fields * - обязательные поля
      .registration-input-section(v-for="input in inputs")
        label {{ input.label + (input.required ? ' *' : '') }}
        .registration-input(:class="{'input-error': (input.inputError && !input.value.length)}")
          .registration-input-icon
            i.fas.fa-user-alt
          .input-datepicker(v-if="input.name === 'age'")
            datepicker(v-model="input.value")
          input(v-else v-model="input.value" @focus="inputFocus(input)")
          transition(name="error")
            .error-label(v-show="input.error")
              .error-label-icon
                i.fas.fa-exclamation
              .error-label-text {{ 'Введите ' + loverCase(input.label) }}
              .error-label-triangle
      //.registration-input-section
        label Имя *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input(v-model="firstName.value")
      //.registration-input-section
        label Отчество *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input(v-model="patronymic.value")
      //.registration-input-section
        label Дата рождения *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          // input(v-model="age")
          datepicker(v-model="age.value")
      //.registration-input-section
        label E-mail *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input(v-model="email.value")
      //.registration-input-section
        label Страна *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input(v-model="country.value")
      //.registration-input-section
        label Город *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input(v-model="city.value")
      //.registration-input-section
        label Пароль *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input(v-model="password1.value")
      //.registration-input-section
        label Повторите пароль *
        .registration-input
          .registration-input-icon
            i.fas.fa-user-alt
          input(v-model="password2.value")
      .registration-button-section
        .registration-button-btn(@click="send") Отправить
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'registration',
  components: {
    Datepicker
  },
  data () {
    return {
      inputs: {
        lastName: {
          value: '',
          label: 'Фамилия',
          error: false,
          inputError: false,
          required: true
        },
        firstName: {
          value: '',
          label: 'Имя',
          error: false,
          inputError: false,
          required: true
        },
        patronymic: {
          value: '',
          label: 'Отчество',
          error: false,
          inputError: false,
          required: true
        },
        country: {
          value: '',
          label: 'Страна',
          error: false,
          inputError: false,
          required: true
        },
        city: {
          value: '',
          label: 'Город',
          error: false,
          inputError: false,
          required: true
        },
        age: {
          name: 'age',
          value: '',
          label: 'Возраст',
          error: false,
          inputError: false,
          required: true
        },
        email: {
          value: '',
          label: 'e-mail',
          error: false,
          inputError: false,
          required: true
        },
        password1: {
          value: '',
          label: 'Пароль',
          error: false,
          inputError: false,
          required: true
        },
        password2: {
          value: '',
          label: 'Повторите пароль',
          error: false,
          inputError: false,
          required: true
        }
      }
    }
  },
  methods: {
    send () {
      this.checkInputs()
      // this.checkInputs() && this.$store.dispatch('sendRegistrationData', {
      //   lasstName: this.lasstName.value,
      //   firstName: this.firstName.value,
      //   patronymic: this.patronymic.value,
      //   age: this.age.value,
      //   country: this.country.value,
      //   city: this.city.value,
      //   email: this.email.value,
      //   password2: this.password2.value
      // })
      // this.close()
    },
    checkInputs () {
      for (let key in this.inputs) {
        if (!this.inputs[key].value) {
          this.inputs[key].error = true
          return true
        }
      }
    },
    inputFocus (input) {
      if (input.error) input.inputError = true
      input.error = false
    },
    close () {
      this.$emit('close')
    },
    loverCase (value) {
      return value.toLowerCase()
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
          position: relative;
          width: 100%;
          box-shadow: 1px 1px 0 rgba(255,255,255,0.8), inset 1px 1px 3px rgba(0,0,0,0.3);
          height: 26px;
          outline: none;
          background-color: #f4f4f4;
          border: none;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          color: #BABABA;
          border: 1px solid #FFFFFF;
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
          .error-label {
            position: absolute;
            right: 213px;
            top: 0px;
            font-size: 12px;
            padding: 3px 6px;
            min-height: 20px;
            color: white;
            font-weight: bold;
            white-space: nowrap;
            display: flex;
            align-items: center;
            border: 1px solid #991200;
            background-color: #e0401d;
            background-image: linear-gradient(to bottom, #e0401d, #b73016);
            .error-label-icon {
              height: 15px;
              width: 15px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #76200E;
              border-radius: 8px;
              font-size: 9px;
              color: #CC3819;
              margin-right: 4px;
            }
            .error-label-triangle {
              border: 6px solid transparent;
              border-left: 6px solid #991200;
              position: absolute;
              right: -13px;
            }
          }
          .error-enter-active {
            transition: all .3s ease;
          }
          .error-leave-active {
            transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
          }
          .error-enter, .error-leave-to {
            opacity: 0;
            transform: translateX(-50px);
          }
        }
        .input-error {
          border: 1px solid red;
        }
      }
      .registration-button-section {
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
