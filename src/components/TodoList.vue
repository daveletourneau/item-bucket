<template>
  <div class="todoList">
    <h1 class="title is-5">{{ title }}</h1>

    <div class="field has-addons">
      <p class="control">
        <input
          class="input is-default"
          type="text"
          placeholder="Nouvel item..."
          v-model.trim="newTodoText">
      </p>
      <p class="control">
        <Button
          class="button is-primary"
          :disabled="!addButtonEnabled"
          @click="addTodo">Ajouter</button>
      </p>
    </div>
    <hr>
    <ul v-if="todos.length">
      <li class="item" v-for="(todo, index) in todos" :key="index">
        <TodoItem v-model="todos[index]" @input="sortList"/>
      </li>
    </ul>

    <div v-else>
      <p>La liste est vide...</p>
    </div>
    <hr>

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
      title: 'Mes tâches',
      newTodoText: '',
      addButtonEnabled: false,
      todos: [
        { text: 'Premier item de test', isDone: false },
        { text: 'Deuxième item (terminé)', isDone: true }
      ]
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
      this.todos.push({ text: this.newTodoText, isDone: false })

      this.newTodoText = ''
    },
    sortList () {
      // À venir...
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
