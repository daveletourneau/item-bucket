<template>
  <div class="todoItem field has-addons">
    <div class="control">
      <button class="button is-default done-button" @click="toggleDone">
        <i v-if="curValue.isDone" class="fa fa-check-square-o"></i>
        <i v-else class="fa fa-square-o"></i>
      </button>
    </div>
    <div class="control is-expanded">
      <input class="input todo-text is-default" :class="{ 'has-text-grey':curValue.isDone, 'is-italic':curValue.isDone}" type="text" placeholder="Entrée" v-model="curValue.text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  data () {
    return {
      curValue: {
        text: '',
        isDone: false
      }
    }
  },
  props: {
    value: {
      type: Object,
      default () {
        return { text: '', isDone: false }
      }
    }
  },
  methods: {
    toggleDone () {
      this.curValue.isDone = !this.curValue.isDone
      this.emit()
    },
    emit () {
      this.$emit('input', this.curValue)
    }
  },
  created () {
    this.curValue = this.value
  }
}
</script>

<style scoped>
.done-button i {
  width: 15px;
}

.done-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.todo-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
