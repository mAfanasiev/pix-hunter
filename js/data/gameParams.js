const times = {
  start: 30,
  critical: 5,
  frequency: 1000
};

const INITIAL_GAME = {
  task: {},
  tasks: [],
  answers: [],
  lives: 3,
  time: times.start
};

const GAME_ROUNDS = 10;

const life = {
  count: INITIAL_GAME.lives,
  bonus: 50,
  fine: -50,
};

const answerPoint = {
  default: 100,
  bonus: 50,
};

const answerTime = {
  slow: 20,
  fast: 10,
};

export {
  INITIAL_GAME,
  GAME_ROUNDS,
  times,
  answerPoint,
  answerTime,
  life,
};
