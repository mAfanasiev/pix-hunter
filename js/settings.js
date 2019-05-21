export const time = {
  start: 30,
  critical: 5,
  frequency: 1000
};

export const INITIAL_GAME = {
  task: {},
  tasks: [],
  answers: [],
  lives: 3,
  time: time.start
};

export const GAME_ROUNDS = 10;

export const life = {
  count: INITIAL_GAME.lives,
  bonus: 50
};

export const answerPoint = {
  default: 100,
  bonus: 50,
  fine: -50
};

export const answerTime = {
  slow: 20,
  fast: 10
};

export const answerType = {
  photo: `photo`,
  paint: `paint`
};

export const taskType = {
  GUESS_TWO: `two-of-two`,
  GUESS_ONE: `tinder-like`,
  FIND: `one-of-three`
};
