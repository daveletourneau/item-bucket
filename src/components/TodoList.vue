<template>
  <div class="todoList">

    <h1 class="title is-5">{{ title }}</h1>

    <!-- Actions -->
    <div class="buttons has-addons">
      <button class="button is-default" @click="toggleDone">
        <span class="icon is-small">
          <i class="fa fa-eye-slash"></i>
        </span>
        <span>Masquer les items terminés</span>
      </button>
      <button class="button is-danger" @click="emptyList">
        <span class="icon is-small">
          <i class="fa fa-trash"></i>
        </span>
        <span>Tout effacer</span>
      </button>
    </div>

    <hr>

    <!-- Add item input -->
    <div class="field has-addons">
      <p class="control">
        <button class="button is-primary is-outlined is-static done-button">
          <i class="fa fa-plus"></i>
        </button>
      </p>
      <p class="control is-expanded">
        <input
          class="input is-primary"
          type="text"
          placeholder="Ajouter un item..."
          v-model.trim="newTodoText"
          @keyup.enter="addTodo">
      </p>
      <p class="control">
        <button
          class="button is-primary"
          :disabled="!addButtonEnabled"
          @click="addTodo">Ajouter</button>
      </p>
    </div>

    <!-- List -->
    <ul v-if="curValue.todos.length">
      <li class="item" v-for="(todo, index) in curValue.todos" :key="index">
        <todo-item v-model="curValue.todos[index]" @input="sortList"/>
      </li>
    </ul>

    <!-- Empty list -->
    <div v-else class="notification is-info">
      <span class="icon is-small">
        <i class="fa fa-info-circle"></i>
      </span>
      <span>Cette liste est vide...</span>
    </div>

  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data () {
    return {
      curValue: {
        title: '',
        todos: []
      },
      newTodoText: '',
      addButtonEnabled: false
    }
  },
  props: {
    value: {
      type: Object,
      default () {
        return { title: '', todos: [] }
      }
    },
    title: {
      type: String,
      default () {
        return 'Nouvelle liste'
      }
    }
  },
  watch: {
    newTodoText (val) {
      if (val.length > 0) {
        this.addButtonEnabled = true
      } else {
        this.addButtonEnabled = null
      }
    }
  },
  methods: {
    addTodo () {
      this.curValue.todos.push({ text: this.newTodoText, isDone: false })
      this.$emit('input', this.curValue)
      this.newTodoText = ''
    },
    emptyList () {
      this.curValue.todos.splice(0)
    },
    toggleDone () {
      // À venir...
    },
    sortList () {
      // À venir...
    }
  },
  created () {
    this.curValue = this.value
    if (this.title !== 'Nouvelle liste') {
      this.curValue.title = this.title
    }
  }
}
</script>

<style lang="scss">
.done-button i {
  width: 15px;
}

.item:not(:last-child) {
  .todo-text {
    border-bottom: none;
  }
}

.item:first-child .done-button {
  border-top-left-radius: 3px;
}

.item:last-child button {
  border-bottom-left-radius: 3px;
}

.item:first-child .todo-text {
  border-top-right-radius: 3px;
}

.item:last-child .todo-text {
  border-bottom-right-radius: 3px;
}
</style>
