<template>
  <div class="mainPage">
    <h1 class="title">Item-bucket</h1>
    <h2 class="subtitle">Outil simple de gestion de tâches</h2>
    <hr>
    <todo-list />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoItem from '@/components/TodoItem'

export default {
  name: 'MainPage',
  components: {
    TodoList, TodoItem
  },
  data () {
    return {
      testTodo: {}
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
