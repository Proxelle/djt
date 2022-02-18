<template lang="pug">
  .editor
    editor-menu-bar(:editor="editor" v-slot="{ commands, isActive }")
      .menubar
        button.menubar-button(@click="commands.undo") &larr;
        button.menubar-button(@click="commands.redo") &rarr;
        .separator
        button.menubar-button(:class="{ 'is-active': isActive.bold() }" :style="{'fontWeight': 'bold'}" @click="commands.bold")  Жирный
        button.menubar-button(:class="{ 'is-active': isActive.italic() }" :style="{'fontStyle': 'italic'}" @click="commands.italic") Наклонный
        button.menubar-button(:class="{ 'is-active': isActive.underline() }" :style="{'textDecoration': 'underline'}" @click="commands.underline") Подчеркнутый
        button.menubar-button(:class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph") Параграф
        .separator
        button.menubar-button(
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        ) Заголовок1
        button.menubar-button(
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        ) Заголовок2
        button.menubar-button(
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        ) Заголовок3
        button.menubar-button(
          :class="{ 'is-active': isActive.heading({ level: 4 }) }"
          @click="commands.heading({ level: 4 })"
        ) Заголовок4
        button.menubar-button(:class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list") Маркированый список
        button.menubar-button(:class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list") Нумерованый список
        button.menubar-button(:class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote") Цитата
        button.menubar-button(@click="commands.horizontal_rule") Горизонтальная линия
        .separator
        button.menubar-button(@click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })") Создать таблицу
        span(v-if="isActive.table()")
          button.menubar-button(@click="commands.deleteTable") Удалить таблицу
          button.menubar-button(@click="commands.addColumnBefore") Добавить колонку до
          button.menubar-button(@click="commands.addColumnAfter") Добавить колонку после
          button.menubar-button(@click="commands.deleteColumn") Удалить колонку
          button.menubar-button(@click="commands.addRowBefore") Добавить строку до
          button.menubar-button(@click="commands.addRowAfter") Добавить строку после
          button.menubar-button(@click="commands.deleteRow") Удалить строку
          // button.menubar-button(@click="commands.toggleCellMerge") combine_cells
        .separator
        button.menubar-button(@click="showImagePrompt(commands.image)") Картинка
    editor-content.editor-content(:editor="editor")
    .editor-buttons
      button(@click="savePage") Сохранить
      button(@click="cencel") Отмена
</template>

<script>
// import Icon from 'Components/Icon'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Image
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBar
    // Icon
  },
  props: ['page'],
  data () {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3, 4] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Table({ resizable: true }),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
          new Image()
        ],
        content: this.page.text
      })
    }
  },
  methods: {
    savePage () {
      this.page.text = this.editor.getHTML()
      this.$store.dispatch('admin/seveEditPage', this.page)
    },
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
    cencel () {
      this.$emit('close')
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

<style scoped lang="scss">
  .editor {
    padding-top: 15px;
    .menubar {
      .menubar-button {
        height: 20px;
        border-radius: 3px;
        border: none;
        margin-right: 5px;
        margin-bottom: 5px;
        cursor: pointer;
        background-color: #E5D9C1;
        &:hover {
          background-color: #f3ead7;
        }
      }
    }
    .editor-content {
      padding: 10px 0px;
      .ProseMirror {
        background: red;
      }
    }
  }
  .editor-buttons {
      display: flex;
      .editor-button {
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
</style>
