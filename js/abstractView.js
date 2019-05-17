import {getElementFromTemplate} from './util';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Abstract class doesn't call by itself`);
    }
  }

  get template() {
    throw new Error(`Need tamplates`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }

    this._element = this.render();
    this.bind(this._element);

    return this._element;
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {

  }

}
