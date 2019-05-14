import {getElementFromTemplate, nextPage} from './util';
import game1 from './game-1';

const RULES = `<template id="rules">
<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>
</template>`;

export default () => {

  const rules = getElementFromTemplate(RULES);
  const inputField = rules.querySelector(`.rules__input`);
  const button = rules.querySelector(`.rules__button`);
  const form = rules.querySelector(`.rules__form`);

  const inputChangeHandler = ({target}) => {
    if (target.value.trim() && target.value.length > 0) {
      button.removeAttribute(`disabled`);
    } else {
      button.setAttribute(`disabled`, ``);
    }
  };

  inputField.addEventListener(`input`, inputChangeHandler);
  form.addEventListener(`submit`, (e) => e.preventDefault());
  nextPage(rules)(`.rules__button`)(game1());

  return rules;
};
