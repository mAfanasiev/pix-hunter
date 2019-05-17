import {changeView} from '../../util';
import IntroView from './view';
import greetingView from '../greeting/screen';

export default () => {
  const introView = new IntroView();
  changeView(introView.element);

  introView.goNext = () => {
    greetingView();
  };
};
