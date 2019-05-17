import AbstractView from '../../abstractView';
import {calculateTotalGameScore} from './util';
import {life, answerPoint, GAME_ROUNDS, answerTime} from '../../data/gameParams';
import HeaderView from '../header/view';
import renderStats from '../../partial/stats/index';

const resultToTitle = {
  [true]: `Победа!`,
  [false]: `Поражение!`
};

const renderExtraPoints = ({answers, lives}) => {
  const fastAnswers = answers.filter((answer) => {
    return (answer.time < answerTime.fast) && answer.isCorrect;
  });

  const slowAnswers = answers.filter((answer) => {
    return (answer.time > answerTime.slow) && answer.isCorrect;
  });

  const extraPoints = [
    {
      type: `fast`,
      title: `Бонус за скорость:`,
      count: fastAnswers.length,
      points: fastAnswers.length * answerPoint.bonus
    },
    {
      type: `alive`,
      title: `Бонус за жизни:`,
      count: lives,
      points: lives * life.bonus
    },
    {
      type: `slow`,
      title: `Штраф за медлительность:`,
      count: slowAnswers.length,
      points: slowAnswers.length * answerPoint.fine
    }
  ];

  return extraPoints.map((it) => {
    return `<tr>
              <td></td>
              <td class='result__extra'>${it.title}</td>
              <td class='result__extra'>${it.count}&nbsp;<span class='stats__result stats__result--${it.type}'></span></td>
              <td class='result__points'>×&nbsp;50</td>
              <td class='result__total'>${it.points}</td>
            </tr>`;
  }).join(``);
};

export default class ResultView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    const {answers, lives} = this.state;

    const isWin = answers.length === GAME_ROUNDS;

    const correctAnswers = answers.filter((answer) => {
      return answer.isCorrect;
    });

    return `${new HeaderView().template}
      <div class='result'>
        <h1>${resultToTitle[isWin]}</h1>
        <table class='result__table'>
          <tr>
            <td class='result__number'>1.</td>
            <td colspan='2'>
              ${renderStats(answers)}
            </td>
            <td class='result__points'>${isWin ? `×&nbsp;100` : ``}</td>
            <td class='result__total ${!isWin ? `result__total--final` : ``}'>${isWin ? correctAnswers.length * answerPoint.default : `FAIL`}</td>
          </tr>
          ${isWin ? renderExtraPoints(this.state) : ``}
          <tr>
            <td colspan='5' class='result__total  result__total--final'>${isWin ? calculateTotalGameScore(answers, lives) : ``}</td>
          </tr>
        </table>
      </div>`;
  }
}
