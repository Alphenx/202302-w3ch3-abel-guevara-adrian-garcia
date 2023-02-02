export default class Component {
  protected element: HTMLElement;
  #parentElement: HTMLElement | null;

  constructor(
    parentElement: HTMLElement | null,
    tag: string,
    cssClasses: string = '',
  ) {
    this.element = document.createElement(tag);
    this.element.className = cssClasses;
    this.#parentElement = parentElement;
  }

  render() {
    this.#parentElement?.appendChild(this.element);
  }

  registerClick(listener: () => void): void {
    this.element.addEventListener('click', listener);
  }

  changeClassname(className: string) {
    this.element.classList.toggle(className);
  }

  remove() {
    this.element.remove();
  }
}
