const socket = io('http://localhost:5000');
export default {
  newUser(store, name) {
    socket.emit('new user', name);
    store.dispatch('NEW_USER', name);
  },
  newQuestion(store) {
    socket.emit('request question', store.questions);
  },
  newAnswers(store) {

  },
    // newGame: 'NEW_GAME',
    // joinGame: 'JOIN_GAME',
};
