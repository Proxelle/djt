<template lang="pug">
  .faq-container
    .faq-item
      .question(@click="toggleAnswer")
        //- .name-block
          .icon ?
          .name {{ question }}
        .text {{ question }}
      .answer(v-if="showAnswer")
        .text {{ answer }}
        .name-block
          img(src="../../../assets/img/photos/1.jpg")
          div
            //- .name {{ answer.name }}
            //- .post {{ answer.post }}
            .name Владислав Серёгин
            .post Председатель НКП НОТ
</template>

<script>
export default {
  name: 'faq-item',
  props: ['question', 'answer'],
  data () {
    return {
      showAnswer: false
    }
  },
  methods: {
    toggleAnswer () {
      this.showAnswer = !this.showAnswer
    }
  }
}
</script>

<style lang="scss" scoped>
  .faq-item {
    background: #7062472e;
    padding: 10px;
    margin-bottom: 15px;
    .question {
      cursor: pointer;
      .name-block {
        display: flex;
        align-items: center;
        .icon {
          height: 30px;
          width: 30px;
          background: #7c9f6e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          border-radius: 50%;
          margin-right: 8px;
        }
        .name {
          font-weight: bold;
          padding: 10px 0px;
        }
      }
      .text {
        padding: 10px 5px;
        font-size: 16px;
      }
    }
    .answer {
      background: #ffffff94;
      padding: 10px;
      margin-top: 10px;
      .name-block {
        display: flex;
        align-items: center;
        img {
          width: 75px;
          display: block;
          border-radius: 50%;
          margin-right: 15px;
        }
        .name {
          font-weight: bold;
          padding: 5px 0px;
        }
        .post {
          padding: 5px 0px;
        }
      }
      .text {
        padding: 10px 0px 20px 0px;
        font-size: 16px;
      }
    }
  }
</style>