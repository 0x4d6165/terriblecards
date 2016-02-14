export default {
  NEW_USER(state, name) {
    state.user = name;
    state.users.push(name);
  },
  LOAD_CARDS(state, questions, answers) {
    state.questions = questions;
    state.answers = answers.map(card => {
      card.owner = '';
      return card;
    });
  },
  INCREMENT_POINTS(state, userID) {
    state.users = state.users.map((user) => {
      if (user.id === userID) {
        user.points++;
        return user;
      } else {
        return user;
      }
    });
  },
  NEW_QUESTION(state, question) {
    state.newQuestion = question;
  },
};
