'use-strict';

import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import LoginView from './components/LoginView.vue';
import GamesListView from './components/GamesListView.vue';

Vue.use(Router);

// const socket = io('http://localhost:5000');
const router = new Router();

router.map({
  '/': {
    component: LoginView,
  },
  '/games': {
    component: GamesListView,
  },
});

router.redirect({
  '*': '/',
});

router.start(App, '#app');
