<template lang='jade'>
.container-fluid
  .center-block
    h2 TerribleCards: an online game of Cards Against Humanity. Please enter a screen name.
    input(v-model='newUser', @keyup.enter='addNewUser')
</template>

<script>
import store from '../store';
export default {
  name: 'Login',
  data() {
    return {
      newUser: '',
    };
  },
  methods: {
    addNewUser() {
      const text = this.newUser.trim();
      if (text) {
        store.actions.newUser({
          name: text,
          id: Math.random().toString(36).substring(7),
        });
        this.$router.go('/games');
      }
    },
  },
};
</script>
