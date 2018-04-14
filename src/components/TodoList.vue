<template>
  <div class="todoList">
    <h1 class="title is-5">{{ msg }}</h1>

    <div class="field has-addons">
      <p class="control">
        <input  class="input is-default"
                type="text"
                placeholder="Nouvelle entrée..."
                v-model="newTodoText">
      </p>
      <p class="control">
        <Button  class="button is-primary"
            :disabled="newTodoText==''"
            @click="addTodo">Ajouter</button>
      </p>
    </div>

    <hr>
    <div v-if="todos.length > 0">
      <TodoItem v-for="(todo, index) in todos" :key="index" v-model="todos[index]"/>
    </div>
    <div v-else>
      <p>Rien à afficher...</p>
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
      msg: 'Ma Todo list',
      newTodoText: '',
      todos: []
    }
  },
  methods: {
    addTodo () {
      this.todos.push({ text: this.newTodoText, done: false })
      this.newTodoText = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
