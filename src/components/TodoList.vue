<template>
  <div class="todoList hero is-light">

    <div class="panel">
      <div class="panel-heading"><span class="has-text-weight-semibold">{{ curValue.title }}</span>

        <div class="is-pulled-right">
          <!-- Actions -->
          <div class="buttons has-addons">
            <button class="button is-default is-small" @click="toggleDone" :disabled="!doneTodos.length">
              <span class="icon is-small">
                <i
                  class="fa"
                  :class="{ 'fa-eye-slash':showDoneTodos,
                            'fa-eye':!showDoneTodos}">
                </i>
              </span>
              <span v-if="showDoneTodos">Masquer terminés</span>
              <span v-else>Afficher terminés</span>
            </button>
            <button class="button is-default is-small" @click="emptyList" :disabled="curValue.todos.length===0">
              <span class="icon is-small">
                <i class="fa fa-trash"></i>
              </span>
              <span>Vider</span>
            </button>
            <button class="button is-danger is-small" @click="deleteSelf">
              <span class="icon is-small">
                <i class="fa fa-times"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="panel-block">
        <!-- Add item input -->
        <div class="new-todo-input field has-addons">
          <p class="control">
            <button class="button is-default done-button">
              <i class="fa fa-plus"></i>
            </button>
          </p>
          <p class="control is-expanded">
            <input
              class="input is-default"
              type="text"
              placeholder="Ajouter un item..."
              v-model.trim="newTodoText"
              @keyup.enter="addTodo">
          </p>
          <p class="control">
            <button
              class="button is-default"
              :disabled="!newTodoText"
              @click="addTodo">Ajouter</button>
          </p>
        </div>
      </div>

      <div v-if="curValue.todos.length">
        <!-- List - Pending todos-->
        <div class="panel-block">
          <ul style="width:100%;">
            <li class="todo-item" v-for="(todo, index) in pendingTodos" :key="index">
              <todo-item v-model="pendingTodos[index]" @input="sortList"/>
            </li>
          </ul>
        </div>

        <!-- List - Done todos-->
        <div v-if="showDoneTodos && doneTodos.length" class="panel-block">
          <ul style="width:100%;">
            <li class="todo-item" v-for="(todo, index) in doneTodos" :key="index">
              <todo-item v-model="doneTodos[index]" @input="sortList"/>
            </li>
          </ul>
        </div>
      </div>

      <!-- Empty list -->
      <div v-else class="panel-block">
        <span class="panel-icon is-small">
          <i class="fa fa-info-circle"></i>
        </span>
        <span>Cette liste est vide...</span>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import uuid from 'uuid/v4'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data () {
    return {
      curValue: {
        id: '',
        title: '',
        todos: []
      },
      newTodoText: '',
      addButtonEnabled: false,
      showDoneTodos: true
    }
  },
  computed: {
    doneTodos () {
      return this.curValue.todos.filter(todo => todo.isDone === true)
    },
    pendingTodos () {
      return this.curValue.todos.filter(todo => todo.isDone === false)
    }
  },
  props: {
    value: {
      type: Object,
      default () {
        return { id: '', title: 'Nouvelle liste', todos: [] }
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
    deleteSelf () {
      this.$emit('delete', this.curValue.id)
    },
    toggleDone () {
      this.showDoneTodos = !this.showDoneTodos
    },
    sortList () {
      // À venir...
    }

  },
  created () {
    this.curValue = this.value
    this.curValue.id = uuid()
  }
}
</script>

<style lang="scss">
.done-button i {
  width: 15px;
}

.new-todo-input {
  width: 100%;
}

.todo-item {
  width: 100%;
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
