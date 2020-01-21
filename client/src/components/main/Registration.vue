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
        .registration-input(:class="{'input-error': (input.inputError && !input.value)}")
          .registration-input-icon
            i.fas.fa-check(v-if="showCheckIcon(input)")
            i(v-else :class="input.icon")
          .input-datepicker(v-if="input.name === 'age'" @click="inputFocus(input)")
            datepicker(v-model="input.value" :language="ru")
          input(v-else v-model="input.value" @focus="inputFocus(input)" :type="input.inputType")
          transition(name="error")
            .error-label(v-show="input.error")
              .error-label-icon
                i.fas.fa-exclamation
              .error-label-text {{ errorText(input.label) }}
              .error-label-triangle
      password(v-model="inputs.password1.value" :strength-meter-only="true")
      .registration-button-section
        .registration-button-btn(@click="send") Отправить
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import { ru } from 'vuejs-datepicker/dist/locale'
import Password from 'vue-password-strength-meter'
export default {
  name: 'registration',
  components: {
    Datepicker,
    Password
  },
  data () {
    return {
      inputs: {
        lastName: {
          value: '',
          label: 'Фамилия',
          icon: ['fas', 'fa-user-alt'],
          inputType: 'text',
          error: false,
          inputError: false,
          required: true
        },
        firstName: {
          value: '',
          label: 'Имя',
          icon: ['fas', 'fa-user-alt'],
          inputType: 'text',
          error: false,
          inputError: false,
          required: true
        },
        patronymic: {
          value: '',
          label: 'Отчество',
          icon: ['fas', 'fa-user-alt'],
          inputType: 'text',
          error: false,
          inputError: false,
          required: true
        },
        country: {
          value: '',
          label: 'Страна',
          icon: ['far', 'fa-flag'],
          inputType: 'text',
          error: false,
          inputError: false,
          required: true
        },
        city: {
          value: '',
          label: 'Город',
          icon: ['fas', 'fa-city'],
          inputType: 'text',
          error: false,
          inputError: false,
          required: true
        },
        age: {
          name: 'age',
          value: '',
          label: 'Возраст',
          icon: ['fas', 'fa-birthday-cake'],
          inputType: 'text',
          error: false,
          inputError: false,
          required: true
        },
        email: {
          value: '',
          label: 'e-mail',
          icon: ['fas', 'fa-envelope'],
          inputType: 'email',
          error: false,
          inputError: false,
          required: true
        },
        password1: {
          value: '',
          label: 'Пароль',
          icon: ['fas', 'fa-unlock-alt'],
          inputType: 'password',
          error: false,
          inputError: false,
          required: true
        },
        password2: {
          value: '',
          label: 'Повторите пароль',
          icon: ['fas', 'fa-unlock-alt'],
          inputType: 'password',
          error: false,
          inputError: false,
          required: true
        }
      },
      ru: ru
    }
  },
  computed: {
    checkPasswords () {
      return this.inputs.password1.value === this.inputs.password2.value
    }
  },
  methods: {
    send () {
      // if (this.checkInputs()) {
      this.$store.dispatch('sendRegistrationData', {
        test: 1
        // lastName: 'this.inputs.lastName.value'
        // firstName: this.inputs.firstName.value,
        // patronymic: this.inputs.patronymic.value,
        // age: this.inputs.age.value,
        // country: this.inputs.country.value,
        // city: this.inputs.city.value,
        // email: this.inputs.email.value,
        // password: this.inputs.password1.value
      })
      this.close()
      // }
    },
    checkInputs () {
      this.errorClear()
      for (let key in this.inputs) {
        let checkEmail = key === 'email' && !this.validateEmail(this.inputs.email.value)
        let checkPassword1 = key === 'password1' && this.inputs.password1.value.length < 8

        if (!this.inputs[key].value || checkEmail || checkPassword1 || (key === 'password2' && !this.checkPasswords)) {
          this.inputs[key].error = true
          return false
        }
      }
      return true
    },
    validateEmail (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    validatePass (pass) {
      let letter = /[a-zA-Z]/
      let number = /[0-9]/

      if (pass.length < 8 || !letter.test(pass) || !number.test(pass)) return false
      else return true
    },
    inputFocus (input) {
      if (input.error) input.inputError = true
      input.error = false
    },
    close () {
      this.$emit('close')
    },
    errorText (text) {
      if (text === 'e-mail' && !this.validateEmail(this.inputs.email.value)) return 'Некорректный e-mail'
      else if (text === 'Пароль' && this.inputs.password1.value.length < 8) return 'Пароль меньше 8 символов'
      else if (text === 'Пароль' && !this.validatePass(this.inputs.password1.value)) return 'Некорректный Пароль'
      else if (text === 'Повторите пароль' && !this.checkPasswords) return 'Пароль не совпадает'
      else return 'Введите ' + text.toLowerCase()
    },
    errorClear () {
      for (let key in this.inputs) {
        this.inputs[key].error = false
        this.inputs[key].inputError = false
      }
    },
    showCheckIcon (input) {
      if (input.inputType === 'password' && input.value.length > 7) return true
      else if (input.inputType === 'email' && this.validateEmail(input.value)) return true
      else if ((input.inputType !== 'email' && input.inputType !== 'password') && input.value) return true
      else return false
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
            i.far.fa-flag {
               font-weight: 900;
            }
            i.fas.fa-check {
              color: #569801
            }
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
