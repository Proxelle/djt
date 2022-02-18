<template lang="pug">
  .faq
    h1 Вопросы и ответы
    .faq-container
      faq-item(v-for="item in questions" :question="item.question" :answer="item.answer")
</template>

<script>
import FaqItem from './faq/FaqItem.vue'

export default {
  name: 'faq',
  components: {
    FaqItem
  },
   mounted () {
    this.$store.dispatch('admin/getQuestions')
  },
  computed: {
    questions () {
      return this.$store.getters['admin/getQuestions']
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  padding: 10px 5px 20px 5px;
}
</style>
