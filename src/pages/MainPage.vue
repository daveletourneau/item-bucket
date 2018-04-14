<template>
  <div class="mainPage">
    <h1 class="title">Item-bucket</h1>
    <h2 class="subtitle">Outil simple de gestion de todo</h2>

    <todo-list />
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
    return {}
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
