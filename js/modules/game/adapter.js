import {answerType, taskType} from '../../settings';

const serverTitleToClientTitle = {
  'two-of-two': taskType.GUESS_TWO,
  'one-of-three': taskType.FIND,
  'tinder-like': taskType.GUESS_ONE
};

const serverAnswerTypeToClientAnswerType = {
  'painting': answerType.paint,
  'photo': answerType.photo
};

const formatAnswers = (answers) => {
  return answers.map((it) => {
    return {
      img: it.image.url,
      type: serverAnswerTypeToClientAnswerType[it.type]
    };
  });
};

const formatQuestion = (question) => {
  return {
    type: serverTitleToClientTitle[question.type],
    title: question.question,
    answers: formatAnswers(question.answers)
  };
};

export default (data) => {
  return data.map((question) => {
    return formatQuestion(question);
  });
};
