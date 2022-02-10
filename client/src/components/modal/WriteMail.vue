<template lang="pug">
  .write-mail-cont
    .write-mail
      .write-mail-close(@click="close")
        i.fas.fa-times
      .write-mail-title
        span.write-mail-title-text Написать нам
      .write-mail-inputs
        .write-mail-input-section(v-for="input in inputs")
          label {{ input.label }}
          .textarea-input(v-if="input.name === 'text'")
            textarea.write-mail-input(v-model="input.value")
            transition(name="error")
              .error-label(v-show="input.error")
                .error-label-icon
                  i.fas.fa-exclamation
                .error-label-text {{ errorText(input.name) }}
                .error-label-triangle
          .write-mail-input(v-else :class="{'input-error': (input.inputError && !input.value)}")
            .write-mail-input-icon
              i.fas.fa-check(v-if="showCheckIcon(input)")
              i(v-else :class="input.icon")
            input(v-model="input.value" :type="input.inputType")
            transition(name="error")
              .error-label(v-show="input.error")
                .error-label-icon
                  i.fas.fa-exclamation
                .error-label-text {{ errorText(input.name) }}
                .error-label-triangle
      .write-mail-button-section
        .write-mail-button-btn(@click="send") Отправить
</template>

<script>
export default {
  data () {
    return {
      inputs: {
        name: {
          name: 'FIO',
          value: '',
          label: 'ФИО',
          icon: ['fas', 'fa-user-alt'],
          inputType: 'text',
          error: false,
          inputError: false,
          required: true
        },
        email: {
          name: 'e-mail',
          value: '',
          label: 'e-mail',
          icon: ['fas', 'fa-envelope'],
          inputType: 'email',
          error: false,
          inputError: false,
          required: true
        },
        text: {
          name: 'text',
          value: '',
          label: 'Введите текст',
          error: false,
          inputError: false,
          required: true
        }
      }
    }
  },
  methods: {
    send () {
      if (this.checkInputs()) {
        this.$store.dispatch('main/sendMail', {
          fio: this.inputs.name.value,
          email: this.inputs.email.value,
          text: this.inputs.text.value
        })
        this.close()
      }
    },
    checkInputs () {
      this.errorClear()
      for (let key in this.inputs) {
        let checkEmail = key === 'email' && !this.validateEmail(this.inputs.email.value)

        if (!this.inputs[key].value || checkEmail) {
          this.inputs[key].error = true
          return false
        }
      }
      return true
    },
    errorText (nameInput) {
      if (nameInput === 'e-mail' && !this.validateEmail(this.inputs.email.value)) return 'Некорректный e-mail'
      else if (nameInput === 'text') return 'Введите текст'
      else if (nameInput === 'FIO') return 'Введите ФИО'
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
    },
    validateEmail (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
  .write-mail-cont {
    padding: 3px;
    border: 1px #CBCBCB solid;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    .write-mail {
      background-color: #ffffff;
      border-radius: 1px;
      box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
      position: relative;
      .write-mail-close {
        height: 18px;
        width: 18px;
        position: absolute;
        top: 0px;
        right: 0px;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.4), inset 1px 1px 0px rgba(255,255,255,0.5);
        background-color: #2b4423;
        border: 1px solid #2b4423;
        color: black;
        text-shadow: white;
        text-shadow: 0.4px 0.4px 0.4px lightgrey;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease-out;
        &:hover {
          background-color: #2b4423d9;
        }
        &:active {
          background-color: #2b4423;
          box-shadow: 1px 1px 0 rgba(255,255,255,0.8), inset 1px 1px 3px rgba(0,0,0,0.3);
        }
      }
      .write-mail-title {
        margin-bottom: 15px;
        padding: 15px 15px 0px 15px;
        span.write-mail-title-text {
          font-size: 14px;
          color: #7e7e7e;
          display: block;
        }
        span.write-mail-required-fields {
          font-size: 11px;
          color: #569801;
          margin-top: -2px;
          display: block;
        }
      }
      .write-mail-inputs {
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 75vh;
        padding: 0px 15px 20px 15px;
        .write-mail-input-section {
          margin-bottom: 15px;
          .textarea-input {
            position: relative;
          }
          label {
            color: #7e7e7e;
            font-size: 11px;
          }
          .write-mail-input {
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
            .write-mail-input-icon {
              width: 28px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0px 5px;
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
          textarea {
            display: block;
            width: 254px !important;
            min-height: 70px;
            max-height: 270px;
            padding: 5px;
            color: #7e7e7e !important;
            font-size: 12px;
          }
        }
      }

      .write-mail-button-section {
        display: flex;
        justify-content: flex-end;
        padding: 15px 15px;
        .write-mail-button-btn {
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
    }
  }

  .error-label {
    position: absolute;
    left: 0px;
    bottom: -32px;
    font-size: 12px;
    padding: 2px;
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
      border-bottom: 6px solid #991200;
      position: absolute;
      left: 32px;
      top: -13px;
    }
  }
</style>
