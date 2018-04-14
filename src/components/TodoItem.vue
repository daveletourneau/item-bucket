<template>
  <div class="todoItem field has-addons">
    <div class="control">
      <button class="button is-primary" :class="{'is-active': curValue.done}" @click="toggleDone">
        <i :class="[done === true ? 'far fa-check-square' : 'far fa-square']"></i>
      </button>
    </div>

    <div class="control">
      <input class="input" type="text" placeholder="Entrée" v-model="curValue.text" @input="change">
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
        done: false
      }
    }
  },
  computed: {
    done () {
      // eslint-disable-next-line
      console.log(`Dans 'computed': ${this.curValue.done}`)
      return this.curValue.done
    }
  },
  props: {
    value: { text: '', done: false }
  },
  methods: {
    toggleDone () {
      this.curValue.done = !this.curValue.done
      this.change()
    },
    change () {
      this.stateIcon = this.curValue.done ? 'fa-check-square' : 'fa-square'
      this.$emit('input', this.curValue)
      // eslint-disable-next-line
      console.log(this.curValue)
    }
  },
  created () {
    this.curValue = this.value
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
