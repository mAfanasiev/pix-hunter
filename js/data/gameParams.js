const INITIAL_GAME = {
  task: {},
  tasks: [],
  answers: [],
  lives: 3,
  timer: 25,
};

const GAME_ROUNDS = 10;

const TIMER_TIME = 30;

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
  TIMER_TIME,
  answerPoint,
  answerTime,
  life,
};
