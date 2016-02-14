<template lang='jade'>
.container-fluid
  ul.list-group
    li.list-group-item(v-for='otherUser in users') {{ otherUser.name }}
      span.badge {{ otherUser.points }}
  ul.list-group
    li.list-group-item {{ currentQuestion.text }}
</template>

<script>
import store from '../store';

export default {
  name: 'Game',
  data() {
    return {
      currentQuestion: store.state.currentQuestion,
    };
  },
  computed: {
    user() {
      return store.state.user;
    },
    users() {
      return store.state.users;
    },
    questions() {
      return store.state.questions;
    },
    answers() {
      return store.state.answers;
    },
  },
  ready() {
    store.actions.loadCards();
  },
};
</script>
