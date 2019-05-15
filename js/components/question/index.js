import renderAnswerControls from '../answers/index';

const questionsLengthToImageSize = {
  1: `width='705' height='455'`,
  2: `width='468' height='458'`,
  3: `width='304' height='455'`
};

export default (questions) => questions.map((question, i) => {
  i += 1;

  return `<div class='game__option ${question.isSelected ? `game__option--selected` : ``}'>
      <img src=${question.img} alt='Option ${i}' ${questionsLengthToImageSize[questions.length]}>
      ${(`isSelected` in question) ? `` : renderAnswerControls(i)}
    </div>`;
}).join(``);
