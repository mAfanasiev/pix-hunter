import {GAME_ROUNDS} from '../../data/gameParams';

export const getCheckedControls = (answers) => {
  return answers.filter(((answer) => {
    return answer.checked;
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

export const canContinue = ({lives, answers}) => {
  return (lives > -1) && answers.length < GAME_ROUNDS;
};

export const die = (game) => {
  const lives = game.lives - 1;

  return Object.assign({}, game, {
    lives
  });
};
