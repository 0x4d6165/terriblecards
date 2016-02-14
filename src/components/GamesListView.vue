<template lang='jade'>
nav.navbar.navbar-default.fixed-top
  .container-fluid
    .navbar-header
      button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#navbar-collapse', aria-expanded='false')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(v-link="'games'") {{ user.name }} @ {{ user.id }}
      ul.nav.navbar-nav
        li
          a(v-link="{path: '/games/demo'}") Create New Game
.container-fluid
router-view.view(keep-alive='', transition='', transition-mode='out-in')
</template>

<script>
import store from '../store';

// const socket = io('http://localhost:5000');
export default {
  computed: {
    user() {
      return store.state.user;
    },
  },
  ready() {
  },
};
</script>
