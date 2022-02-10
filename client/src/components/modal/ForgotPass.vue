<template lang="pug">
  .modal-cont
    .modal
      .modal-close(@click="close")
        i.fas.fa-times
      .modal-title
        span.modal-title-text Введите адрес почты на который мы отправим пароль.
      .modal-inputs
        .modal-input-section
          .modal-input
            .modal-input-icon
              i.fas.fa-check(v-if="checkInput")
              i.fas.fa-envelope(v-else)
            input(v-model="inputValue" @focus="errorText = ''" type="text")
            transition(name="error")
              .error-label(v-show="errorText")
                .error-label-icon
                  i.fas.fa-exclamation
                .error-label-text {{ errorText }}
                .error-label-triangle
      .modal-button-section
        .modal-button-btn(@click="send") Отправить
</template>

<script>
export default {
  data () {
    return {
      checkInput: false,
      inputValue: '',
      errorText: ''
    }
  },
  watch: {
    inputValue (val) {
      if (this.validateEmail(val)) this.checkInput = true
      else this.checkInput = false
    }
  },
  methods: {
    send () {
      if (!this.inputValue.length) {
        this.errorText = 'Введите e-mail'
        return
      }
      if (!this.checkInput) {
        this.errorText = 'Некорректный e-mail'
        return
      }
      this.$store.dispatch('main/forgotPassword', {
        email: this.inputValue
      })
      this.close()
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

<style lang="scss" scoped>
  .modal-cont {
    padding: 3px;
    border: 1px #CBCBCB solid;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    .modal {
      background-color: #ffffff;
      border-radius: 1px;
      box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
      position: relative;
      .modal-close {
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
      .modal-title {
        margin-bottom: 15px;
        padding: 15px 15px 0px 15px;
        span.modal-title-text {
          font-size: 14px;
          color: #7e7e7e;
          display: block;
        }
        span.modal-required-fields {
          font-size: 11px;
          color: #569801;
          margin-top: -2px;
          display: block;
        }
      }
      .modal-inputs {
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 75vh;
        padding: 0px 15px 20px 15px;
        .modal-input-section {
          margin-bottom: 15px;
          .modal-input {
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
            .modal-input-icon {
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
            .error-enter, .error-leave-to {
              opacity: 0;
              transform: translateX(-50px);
            }
          }
          .input-error {
            border: 1px solid red;
          }
        }
      }

      .modal-button-section {
        display: flex;
        justify-content: flex-end;
        padding: 15px 15px;
        .modal-button-btn {
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