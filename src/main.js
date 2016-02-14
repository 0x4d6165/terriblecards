'use-strict';

import Vue from 'vue';
import Router from 'vue-router';
import App from './components/App.vue';
import LoginView from './components/LoginView.vue';

Vue.use(Router);

const router = new Router();

router.map({
  '/': {
    component: LoginView,
  },
});

router.redirect({
  '*': '/',
});

router.start(App, '#app');
