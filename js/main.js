import {showScreen} from './util';
import intro from './intro';

showScreen(intro());

document.addEventListener(`click`, (e) => {
  const goHomeButton = e.target.closest(`.back`);

  if (!goHomeButton) {
    return;
  }

  showScreen(intro());
});
