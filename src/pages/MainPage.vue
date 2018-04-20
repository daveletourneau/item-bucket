<template>
  <div class="mainPage">
    <h1 class="title">Item-bucket</h1>
    <h2 class="subtitle">Outil simple de gestion de tâches</h2>
    <hr>

    <div class="field has-addons">
      <p class="control">
        <button class="button is-default  done-button">
          <i class="fa fa-list"></i>
        </button>
      </p>
      <p class="control is-expanded">
        <input
          class="input is-default"
          type="text"
          placeholder="Nouvelle liste..."
          v-model.trim="newListTitle"
          @keyup.enter="createList">
      </p>
      <p class="control">
        <button
          class="button is-default"
          @click="createList"
          :disabled="!newListTitle">Créer</button>
      </p>
    </div>

    <hr>

    <!-- Todo Lists -->
    <div v-if="todoLists.length>0">
      <div v-for="(todoList, index) in sortedTodoLists" :key="todoList.id">
        <todo-list v-model="sortedTodoLists[index]" @delete="deleteListById(todoList.id)" />
        <br>
      </div>
    </div>

    <!-- No lists to display -->
    <div v-else class="notification is-default">
      <span class="icon is-small">
        <i class="fa fa-info-circle"></i>
      </span>
      <span>Aucune liste à afficher</span>
    </div>

  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MainPage',
  components: {
    TodoList
  },
  data () {
    return {
      newListTitle: ''
    }
  },
  computed: {
    listCount () {
      return this.$store.state.todoLists.length
    },
    todoLists () {
      return this.$store.state.todoLists
    },
    ...mapGetters([
      'sortedTodoLists'
    ])
  },
  methods: {
    createList () {
      if (this.newListTitle !== '') {
        this.$store.commit('newList', { title: this.newListTitle, todos: [] })
        this.newListTitle = ''
      }
    },
    ...mapMutations([
      'newList',
      'deleteListById'
    ])
  },
  created () {
  }
}
</script>

<style scoped>
</style>
