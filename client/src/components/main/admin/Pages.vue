<template lang="pug">
  .pages
    .pages-list(v-if="!editablePage")
      .page(v-for="page in pages" @click="showPageEditor(page)") {{ page.name }}
    editor-page(v-else :page="editablePage" @close="hidePageEditor")
</template>

<script>
import editorPage from './EditorPage'

export default {
  name: 'pages',
  components: {
    editorPage
  },
  data () {
    return {
      editablePage: null
    }
  },
  computed: {
    pages () {
      return this.$store.getters['main/getPages']
    }
  },
  methods: {
    showPageEditor (page) {
      this.editablePage = page
    },
    hidePageEditor () {
      this.editablePage = null
    }
  }
}
</script>

<style scoped lang="scss">
  .pages {
    padding: 10px 0px;
  }
  .page {
    cursor: pointer;
    &:hover {
      background-color: #70A86E;
    }
  }
</style>
