<template lang='jade'>
.container-fluid
  input(v-model='newTodo', @keyup.enter='addTodo')
  .list-group
    button(type="button" class='list-group-item' v-for='todo in todos' @click='removeTodo($index)')
      span {{ todo.text }}
</template>

<script>
export default {
  name: 'Todos',
  data() {
    return {
      newTodo: '',
      todos: [
        { text: 'Add some new todos' },
      ],
    };
  },
  methods: {
    addTodo() {
      const text = this.newTodo.trim();
      if (text) {
        this.todos.push({ text });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style lang='less' scoped>
.list-group {
  padding-top: 20px;
}
</style>
