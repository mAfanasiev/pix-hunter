import {getElementFromTemplate, showScreen} from '../../util';
import {INITIAL_GAME, TIMER_TIME} from '../../data/gameParams';
import {TASKS, taskType} from '../../data/structure';
import {ContentType, Event, Control, getCheckedControls, nextTask, addAnswer, selectImage, die, canContinue} from './util';
import header from '../header/index';
import renderQuestions from '../question/index';
import stats from '../stats/index';
import result from '../results/index';

let game;

const initGame = () => {
  const tasks = [...TASKS];

  game = Object.assign({}, INITIAL_GAME, {
    task: tasks.pop(),
    tasks
  });
};

const updateGame = (state) => {

  const {task, answers, timer} = state;
  const {type, title, questions} = task;

  const screen = getElementFromTemplate(
      `${header(state)}
      <div class='game'>
          <p class='game__task'>${title}</p>
          <form class='game__content ${ContentType[type] || ``}'>
            ${renderQuestions(questions)}
          </form>
          <div class='stats'>
            ${stats(answers)}
          </div>
        </div>`
  );

  const content = screen.querySelector(`.game__content`);
  const answerControls = Array.from(screen.querySelectorAll(Control[type]));

  content.addEventListener(Event[type], (e) => {
    const checkedAnswerControls = getCheckedControls(answerControls);

    if (!checkedAnswerControls.length || ((type === taskType.GUESS_TWO)
        && checkedAnswerControls.length !== 2)) {
      return;
    }

    let correctAnswer;

    if (type === taskType.FIND) {
      correctAnswer = selectImage(e);
    } else {
      correctAnswer = questions.every((question, i) => {
        return question.type === checkedAnswerControls[i].value;
      });
    }

    if (!correctAnswer) {
      state = die(state);
    }

    state = addAnswer(state, {isCorrect: correctAnswer, time: TIMER_TIME - timer});

    if (canContinue(state)) {
      showScreen(updateGame(nextTask(state)));
    } else {
      showScreen(result(state));
    }
  });

  return screen;
};

export default () => {
  initGame();
  return updateGame(game);
};
