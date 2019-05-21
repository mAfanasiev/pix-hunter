import {answerType} from '../../settings';

const answerTypeToAnswerName = {
  [answerType.photo]: `Фото`,
  [answerType.paint]: `Рисунок`
};

const answers = Object.values(answerType);

export default (index) => {
  return answers.map((it) => {
    return `<label class="game__answer game__answer--${it}">
      <input name="question${index}" type="radio" value="${it}">
      <span>${answerTypeToAnswerName[it]}</span>
    </label>`;
  }).join(``);
};
