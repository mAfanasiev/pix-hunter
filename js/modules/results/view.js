import AbstractView from '../../abstractView';
import {calculateTotalGameScore} from './util';
import {life, answerPoint, GAME_ROUNDS, answerTime} from '../../settings';
import renderStats from '../../partial/stats/index';

const resultToTitle = {
  [true]: `Победа`,
  [false]: `Поражение`
};

export default class ResultView extends AbstractView {
  constructor({result, player}) {
    super();
    this._state = result;
    this._player = player;
  }

  _renderExtraPoints({answers, lives}) {
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
  }

  _renderResultTable({answers, lives}, i) {

    const isWin = answers.length === GAME_ROUNDS;

    const correctAnswers = answers.filter((answer) => {
      return answer.isCorrect;
    });

    return `
      ${i === 1 ? `<h3 class='result__title--archieve'>Ваши прошлые результаты:</h3>` : ``}
      <table class='result__table'>
        <tr>
          <td class='result__number'>${(i > 0) ? `${i}.` : ``}</td>
          <td colspan='2'>
            ${renderStats(answers)}
          </td>
          <td class='result__points'>${isWin ? `×&nbsp;100` : ``}</td>
          <td class='result__total ${!isWin ? `result__total--final` : ``}'>${isWin ? correctAnswers.length * answerPoint.default : `FAIL`}</td>
        </tr>
        ${isWin ? this._renderExtraPoints({answers, lives}) : ``}
        <tr>
          <td colspan='5' class='result__total  result__total--final'>${isWin ? calculateTotalGameScore(answers, lives) : ``}</td>
        </tr>
      </table>
      `;
  }

  _renderResult(results) {
    return results.map((result, i) => {
      return this._renderResultTable(result, i);
    }).join(``);
  }

  _formatTitle(isWin) {
    return `Это ${resultToTitle[isWin]}, ${this._player}!`;
  }

  get template() {
    const results = this._state.reverse();
    const isWin = results[0].answers.length === GAME_ROUNDS;

    return `<div class='result'>
              <h1>${this._formatTitle(isWin)}</h1>
              ${this._renderResult(results)}
            </div>`;
  }
}
