import {nextPage, getElementFromTemplate} from './util';
import greeting from './greeting';

const INTRO = `<div id="intro" class="intro">
<h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`;

export default () => {
  const intro = getElementFromTemplate(INTRO);

  nextPage(intro)(`.intro__asterisk`)(greeting());

  return intro;
};
