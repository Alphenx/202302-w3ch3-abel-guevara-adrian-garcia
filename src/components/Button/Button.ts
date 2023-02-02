import Component from '../Components.js';

export default class Button extends Component {
  #text: string;
  #btnType: 'button' | 'submit' | 'reset' | 'clear';

  constructor(
    text: string,
    btnType: 'button' | 'submit' | 'reset' | 'clear',
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'Button', cssClasses);
    this.#text = text;
    this.#btnType = btnType;
  }

  render(): void {
    super.render();
    this.element.textContent = this.#text;
    this.element.setAttribute('type', this.#btnType);
  }
}
