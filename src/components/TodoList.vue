<template>
  <div class="todoList hero is-light">

    <div class="hero-body">
      <h1 class="title is-4"><span>{{ curValue.title }}</span>

        <!-- Actions -->
        <div class="actions is-pulled-right">
          <div class="buttons has-addons">
            <button class="button is-default is-small" @click="toggleDone">
              <span class="icon is-small">
                <i class="fa fa-eye-slash"></i>
              </span>
              <span>Masquer terminés</span>
            </button>
            <button class="button is-default is-small" @click="emptyList" :disabled="curValue.todos.length===0">
              <span class="icon is-small">
                <i class="fa fa-trash"></i>
              </span>
              <span>Vider</span>
            </button>
            <button class="button is-danger is-small">
              <span class="icon is-small">
                <i class="fa fa-times"></i>
              </span>
            </button>
          </div>
        </div>
      </h1>

      <!-- Add item input -->
      <div class="field has-addons">
        <p class="control">
          <button class="button is-primary done-button">
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
            :disabled="!newTodoText"
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
      <div v-else class="notification is-white">
        <span class="icon is-small">
          <i class="fa fa-info-circle"></i>
        </span>
        <span>Cette liste est vide...</span>
      </div>
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
  computed: {

  },
  props: {
    value: {
      type: Object,
      default () {
        return { title: 'Nouvelle liste', todos: [] }
      }
    }
  },
  methods: {
    addTodo () {
      if (this.newTodoText !== '') {
        this.curValue.todos.push({ text: this.newTodoText, isDone: false })
        this.$emit('input', this.curValue)
        this.newTodoText = ''
      }
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
