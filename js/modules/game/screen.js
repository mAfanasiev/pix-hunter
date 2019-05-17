import {changeView} from '../../util';
import {INITIAL_GAME, TIMER_TIME} from '../../data/gameParams';
import {TASKS} from '../../data/structure';
import {nextTask, addAnswer, die, canContinue} from './util';
import renderHeader from '../header/screen';
import GameView from './view';
import showResult from '../results/screen';

let gameContainer;
let game;

const initGame = () => {
  const tasks = [...TASKS];

  game = Object.assign({}, INITIAL_GAME, {
    task: tasks.pop(),
    tasks
  });
};

const updateGame = (state) => {
  const gameView = new GameView(state);

  gameContainer = document.createDocumentFragment();
  gameContainer.appendChild(renderHeader(state));
  gameContainer.appendChild(gameView.element);

  const {timer} = state;

  gameView.onAnswer = (correctAnswer) => {
    if (!correctAnswer) {
      state = die(state);
    }

    state = addAnswer(state, {isCorrect: correctAnswer, time: TIMER_TIME - timer});

    if (canContinue(state)) {
      changeView(updateGame(nextTask(state)));
    } else {
      showResult(state);
    }
  };

  return gameContainer;
};

export default () => {
  initGame();
  updateGame(game);
  changeView(gameContainer);
};
