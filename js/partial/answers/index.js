import renderAnswerControls from './controls';
import {answerType, taskType} from '../../settings';

const answersLengthToImageSize = {
  1: `width='705' height='455'`,
  2: `width='468' height='458'`,
  3: `width='304' height='455'`
};

const getSearchableElement = (answers) => {
  const paint = answers.filter((answer) => {
    return answer.type === answerType.paint;
  });

  return paint.length === 1 ? answerType.paint : answerType.photo;
};

export default ({type: taskTypes, answers}) => {
  return answers.map((answer, i) => {
    i += 1;

    return `<div class='game__option ${(taskTypes === taskType.FIND) && (answer.type === getSearchableElement(answers)) ? `game__option--selected` : ``}'>
        <img src=${answer.img} alt='Option ${i}' ${answersLengthToImageSize[answers.length]} type=${answer.type} />
        ${(taskTypes !== taskType.FIND) ? renderAnswerControls(i) : ``}
      </div>`;
  }).join(``);
};
