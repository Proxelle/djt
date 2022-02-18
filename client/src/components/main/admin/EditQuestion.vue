<template lang="pug">
  .edit-question
    .title Создание/Редактирование вопроса
    .field
      .label Вопрос
      .text(contenteditable="true" ref="question" @paste="paste($event)")
    .field
      .label Ответ
      .text(contenteditable="true" ref="answer" @paste="paste($event)")
    .field
      .label Автор
      select(v-model="autor")
        option(v-for="item in admins" :value="item.id") {{ `${item.lastname} ${item.firstname}` }}
    .buttons
      button(@click="cancel") Отмена
      button(v-if="questionData" @click="edit") Изменить
      button(v-else @click="add") Сохранить
</template>

<script>
export default {
	props: ['admins', 'questionData'],
	data () {
		return{
			autor: ''
		}
	},
  mounted () {
    if (this.questionData) {
      this.$refs.question.innerHTML = this.questionData.question
      this.$refs.answer.innerHTML = this.questionData.answer
      this.autor = this.questionData.admin_id
    }
  },
	methods: {
    paste (e) {
      e.preventDefault()
      let text = e.clipboardData.getData('text/plain')
      document.execCommand('insertText', false, text)
    },
		edit () {
      let data = {
				question: this.$refs.question.innerHTML,
				answer: this.$refs.answer.innerHTML,
				admin_id: this.autor,
        id: this.questionData.id
			}
			this.$store.dispatch('admin/editQuestion', data)
      this.cancel()
		},
		add () {
      let data = {
				question: this.$refs.question.innerHTML,
				answer: this.$refs.answer.innerHTML,
				admin_id: this.autor	
			}
			this.$store.dispatch('admin/addQuestion', data)
      this.cancel()
		},
		cancel () {
			this.$emit('close')
		}
	}
}
</script>

<style lang="scss" scoped>
  .edit-question {
    padding: 15px;
    .title {
      font-size: 14px;
      font-weight: 700;
      padding-bottom: 15px;
    }
    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      .label {
        padding-bottom: 3px;
      }
      textarea {
        min-height: 200px;
      }
      .text {
        border: 1px gray solid;
        min-height: 150px;
        border-radius: 3px;
        padding: 5px;
      }
    }
    .buttons {
      margin-top: 20px;
    }
  }
</style>
