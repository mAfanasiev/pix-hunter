import AbstractView from '../../abstractView';
import {taskType} from '../../data/structure';
import {getCheckedControls} from './util';
import renderQuestions from '../../partial/question/index';
import renderStats from '../../partial/stats/index';

const REQUIRED_ANSWERS_COUNT = 2;

const ContentType = {
  [taskType.GUESS_ONE]: `game__content--wide`,
  [taskType.FIND]: `game__content--triple`
};

export default class GameView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const {answers, task} = this.state;
    const {type, title, questions} = task;

    return `
        <div class='game'>
            <p class='game__task'>${title}</p>
            <form class='game__content ${ContentType[type] || ``}'>
              ${renderQuestions(questions)}
            </form>
            <div class='stats'>
              ${renderStats(answers)}
            </div>
          </div>`;
  }

  onAnswer() {

  }

  bind() {
    const {type, questions} = this.state.task;

    const game = this.element.querySelector(`.game__content`);
    const radioButtons = Array.from(game.querySelectorAll(`[type='radio']`));

    game.addEventListener(`click`, (e) => {

      const option = e.target.closest(`.game__option`);

      if (option.querySelector(`.game__answer`)) {
        return false;
      }

      let correctAnswer;

      if (option.classList.contains(`game__option--selected`)) {
        correctAnswer = true;
      } else {
        correctAnswer = false;
      }

      this.onAnswer(correctAnswer);
      return correctAnswer;
    });

    game.addEventListener(`change`, () => {
      const checkedAnswerControls = getCheckedControls(radioButtons);

      if (!checkedAnswerControls.length || ((type === taskType.GUESS_TWO)
          && checkedAnswerControls.length !== REQUIRED_ANSWERS_COUNT)) {
        return;
      }

      const correctAnswer = questions.every((question, i) => {
        return question.type === checkedAnswerControls[i].value;
      });

      this.onAnswer(correctAnswer);
    });
  }
}
