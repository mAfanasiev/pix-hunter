import {answerTime, GAME_ROUNDS} from '../../settings';

const statusState = {
  unknown: `unknown`,
  correct: `correct`,
  fast: `fast`,
  slow: `slow`,
  wrong: `wrong`,
};

const getStatItem = ({isCorrect, time} = {}) => {
  let status = statusState.unknown;

  if (isCorrect) {
    status = statusState.correct;

    if (time < answerTime.fast) {
      status = statusState.fast;
    } else if (time > answerTime.slow) {
      status = statusState.slow;
    }

  } else if (isCorrect === false) {
    status = statusState.wrong;
  }

  return `<li class='stats__result stats__result--${status}'></li>`;
};

export default (answers = []) => {
  return [...answers, ...(new Array(GAME_ROUNDS - answers.length))].map(getStatItem).join(``);
};
