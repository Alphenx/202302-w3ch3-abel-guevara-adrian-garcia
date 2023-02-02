export default class Component {
  protected element: HTMLElement;
  protected parentElement: HTMLElement | null;

  constructor(
    parentElement: HTMLElement | null,
    tag: string,
    cssClasses: string = '',
  ) {
    this.element = document.createElement(tag);
    this.element.className = cssClasses;
    this.parentElement = parentElement;
  }

  render() {
    this.parentElement?.appendChild(this.element);
    this.element.addEventListener('click', () => {});
  }

  doAction() {
    this.element.addEventListener('click', () => {});
  }
}
