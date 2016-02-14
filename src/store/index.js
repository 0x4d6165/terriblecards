import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const socket = io('http://localhost:5000');
const state = {
  user: '',
  users: [],
  games: [],
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
