<template>
  <div class="mainPage">
    <h1 class="title">Item-bucket</h1>
    <h2 class="subtitle">Outil simple de gestion de tâches</h2>
    <hr>
    <todo-list v-model="testTodo" title="Ma liste" />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  name: 'MainPage',
  components: {
    TodoList
  },
  data () {
    return {
      testTodo: {
        title: 'MonTest',
        todos: []
      }
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
</style>
