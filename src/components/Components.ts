export default class Component {
  protected element: HTMLElement;
  protected parentElement: HTMLElement | null;

  constructor(
    parentElement: HTMLElement | null,
    tag: string,
    cssClass: string = '',
  ) {
    this.element = document.createElement(tag);
    this.element.className = cssClass;
    this.parentElement = parentElement;
  }

  render() {
    this.parentElement?.appendChild(this.element);
  }
}
