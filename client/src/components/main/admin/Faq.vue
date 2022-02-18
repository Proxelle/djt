<template lang="pug">
  .admin-questions
    button.add-question(@click="addQuestion") Добавить вопрос
    .question(v-for="item in questions")
      .label Вопрос
      .text(v-html="item.question")
      .label Ответ
      .text(v-html="item.answer")
      .label Автор
      .text {{ getAdminName(item.admin_id) }}
      div
        button(@click="setQuestion(item)") Изменить
        button(@click="deleteQuestion(item.id)") Удалить
</template>

<script>
import EditQuestion from './EditQuestion.vue'

export default {
  data () {
    return {
      admins: []
    }
  },
  mounted () {
    this.$store.dispatch('admin/getQuestions')
    this.getAdmins()
  },
  computed: {
    questions () {
      return this.$store.getters['admin/getQuestions']
    }
  },
  methods: {
    async getAdmins () {
      let res = await this.$store.dispatch('admin/getAdminUsers')
      this.admins = res.data
    },
    addQuestion () {
      this.$modal.show(EditQuestion, {
        admins: this.admins
      }, {
        height: 'auto',
        width: 400,
        pivotY: 0.4
      }, {
        'before-close': () => {
          this.getAdmins()
        }
      })
    },
    setQuestion (questionData) {
      this.$modal.show(EditQuestion, {
        questionData,
        admins: this.admins
      }, {
        height: 'auto',
        width: 400,
        pivotY: 0.4
      }, {
        'before-close': () => {
          this.getAdmins()
        }
      })
    },
    async deleteQuestion (id) {
      let res = await this.$store.dispatch('admin/deleteQuestion', id)
      if (res.status === 200) {
        this.$store.commit('admin/deleteQuestion', id)
      }
    },
    getAdminName (id) {
      if (!this.admins.length) return
      
      let admin = this.admins.find(item => {
        return item.id === id
      })
      return `${admin.lastname} ${admin.firstname}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .admin-questions {
    padding: 15px 0px;
    .add-question {
      display: block;
      margin-bottom: 10px;
    }
    .question {
      background-color: #e7e4e4;
      padding: 5px;
      margin-bottom: 10px;
      .label {
        font-size: 12px;
        padding-left: 5px;
        font-weight: bold;
      }
      .text {
        margin-bottom: 10px;
        background: #fffcfc;
        padding: 5px;
      }
    }
  }
</style>
