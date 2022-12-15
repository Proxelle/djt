<template lang="pug">
  footer
    section
      .phones
        .phones-title Телефоны:
        a.phone(href="tel: +74957920449") +7(495)792-04-49
        a.phone(href="tel: +79037920449") +7(903)792-04-49
      .mails
        .mails-title Почта:
        a.mail(href="mailto:jagdterrier@jagdterrier.ru") jagdterrier@jagdterrier.ru
    section.section-2
      button.write-mail-btn(@click="openModalWriteMail") Написать нам
      .links
       
        a(href="https://www.djt-club.de/" target="_blank")
          img(src="../assets/img/links/djt-de.png")
        a(href="https://www.iv-djt.com/" target="_blank")
          img(src="../assets/img/links/iv-djt.png")
        a(href="http://rkf.org.ru/" title="Российская кинологическая федерация" target="_blank")
          img(src="../assets/img/links/rkf.jpg")
        a(href="http://rfos.info/" title="Федерация охотничьего собаководства (РФОС)" target="_blank")
          img(src="../assets/img/links/rfos.jpg")
        a(href="http://www.fci.be/en/" title="Международная кинологическая федерация" target="_blank")
          img(src="../assets/img/links/fci.png")
</template>

<script>
import WriteMail from '../components/modal/WriteMail'

export default {
  name: 'footer-view',
  methods: {
    openModalWriteMail () {
      this.$modal.show(WriteMail, null, {
        height: 'auto',
        width: 300,
        pivotY: 0.4
      })
    }
  }

}
</script>

<style scoped lang="scss">
  @mixin phone-or-mail() {
    display: block;
    color: white;
    text-decoration: none;
    margin-bottom: 3px;
    &:hover {
      text-decoration: underline;
    }
  }

  footer {
    background-color: #2b4423;
    margin: 10px 10px 0px 10px;
    color: white;
    padding: 15px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    .phones, .mails {
      text-align: left;
    }
    .phones-title, .mails-title {
      font-weight: bold;
      margin-bottom: 5px;
    }
    .phones {
      .phone {
        @include phone-or-mail;
      }
    }
    .mails {
      .mail {
        @include phone-or-mail;
      }
    }
    .section-2 {
      text-align: right;
      .write-mail-btn {
        box-shadow: 1px 1px 2px rgba(0,0,0,0.4), inset 1px 1px 0px rgba(255,255,255,0.5);
        display: inline-block;
        padding: 6px 20px;
        background-color: white;
        color: #2b4423;
        font-weight: bold;
        border: 1px solid white;
        cursor: pointer;
        transition: all .3s ease-out;
        &:hover {
          background-color: #ffffffa6;
        }
        &:active {
          background-color: #ffffffa6;
          box-shadow: 1px 1px 0 rgba(255,255,255,0.8), inset 1px 1px 3px rgba(0,0,0,0.3);
        }
      }
      .links {
        margin-top: 20px;
        img {
          height: 50px;
          margin-left: 10px;
        }
      }
    }
  }

  @media (max-width: 580px) {
    footer {
      flex-direction: column;
      .section-2 {
        text-align: left;
        .write-mail-btn {
          margin-top: 10px;
        }
        .links {
          margin-top: 15px;
          img {
            margin-left: 0px;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
