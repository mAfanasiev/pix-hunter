import showIntro from './modules/intro/screen';

showIntro();

document.addEventListener(`click`, (e) => {
  const goHomeButton = e.target.closest(`.back`);

  if (!goHomeButton) {
    return;
  }

  showIntro();
});
