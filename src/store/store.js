import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todoLists: []
}

const getters = {
  sortedTodoLists: (state) => {
    return state.todoLists.sort((a, b) => a.title.localeCompare(b.title))
  },
  todoListById: (state) => (index) => {
    return state.todoLists[index]
  }
}

const mutations = {
  newList (state, newList) {
    state.todoLists.push(newList)
  },
  deleteListById (state, id) {
    state.todoLists.splice(state.todoLists.findIndex(function (todoList, index) {
      return todoList.id === id
    }), 1)
  }

}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
