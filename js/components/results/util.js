import {GAME_ROUNDS, answerPoint, answerTime, life} from '../../data/gameParams';
import {isObject} from '../../validation';

export const calculateAnswerScore = (answer) => {
  if (!isObject(answer)) {
    throw new Error(`Параметр 'answer' должен быть обьектом`);
  }

  if (!(`isCorrect` in answer)) {
    throw new Error(`У параметра answer отсутстувует свойство 'isCorrect'`);
  }

  if (!(`time` in answer)) {
    throw new Error(`У параметра answer отсутстувует свойство 'time'`);
  }

  if ((typeof answer.isCorrect) !== `boolean`) {
    throw new Error(`Свойство answer.isCorrect должно быть true или false`);
  }

  if (!Number.isFinite(answer.time)) {
    throw new Error(`свойство answer.time должно быть числом`);
  }

  let score = 0;

  if (answer.isCorrect === false) {
    return score;
  }

  score += answerPoint.default;

  if (answer.time < answerTime.fast) {
    score += answerPoint.bonus;
  }

  if (answer.time > answerTime.slow) {
    score += answerPoint.fine;
  }

  return score;
};

export const calculateTotalGameScore = (answers, lives) => {
  if (!Array.isArray(answers)) {
    throw new Error(`Параметр 'answers' должен быть массивом`);
  }

  if (!Number.isFinite(lives)) {
    throw new Error(`Параметр 'lives' должен быть числом`);
  }

  if (answers.length < GAME_ROUNDS) {
    return -1;
  }

  if (lives < 0 || lives > life.count) {
    throw new Error(`Переданное количество жизней должно быть от 0 до 3`);
  }

  const answersScore = answers.reduce((sum, current) => {
    return sum + calculateAnswerScore(current);
  }, 0);

  return answersScore + lives * life.bonus;
};
