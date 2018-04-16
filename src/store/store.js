import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todoLists: []
}

const getters = {
  sortedTodoLists: (state) => {
    return state.todoLists
  },
  todoListByIndex: (state) => (index) => {
    return state.todoLists[index]
  }
}

const mutations = {
  newList (state, newList) {
    state.todoLists.push(newList)
  }
}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
