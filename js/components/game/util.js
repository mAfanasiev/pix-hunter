import {taskType} from '../../data/structure';
import {GAME_ROUNDS} from '../../data/gameParams';

export const ContentType = {
  [taskType.GUESS_ONE]: `game__content--wide`,
  [taskType.FIND]: `game__content--triple`
};

export const Event = {
  [taskType.GUESS_TWO]: `change`,
  [taskType.GUESS_ONE]: `change`,
  [taskType.FIND]: `click`
};

export const Control = {
  [taskType.GUESS_ONE]: `[type='radio']`,
  [taskType.GUESS_TWO]: `[type='radio']`,
  [taskType.FIND]: `.game__option`
};

export const getCheckedControls = (answers) => {
  const option = answers[0].classList.contains(`game__option`);

  return answers.filter(((answer) => {
    return option ? answer.classList.contains(`game__option--selected`) : answer.checked;
  }));
};

export const nextTask = (state) => {
  return Object.assign({}, state, {
    task: state.tasks.pop()
  });
};

export const addAnswer = (state, answer) => {
  return Object.assign({}, state, {
    answers: [...state.answers, ...[answer]]
  });
};

export const selectImage = (e) => {
  const option = e.target.closest(`.game__option`);

  if (!option) {
    return false;
  }

  return option.classList.contains(`game__option--selected`);
};

export const canContinue = ({lives, answers}) => {
  return (lives > -1) && answers.length < GAME_ROUNDS;
};

export const die = (game) => {
  const lives = game.lives - 1;

  return Object.assign({}, game, {
    lives
  });
};
