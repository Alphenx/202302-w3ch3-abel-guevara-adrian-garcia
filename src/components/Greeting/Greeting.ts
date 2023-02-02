import Component from '../Components.js';

export default class Greeting extends Component {
  #name: string;
  #surname: string;
  constructor(
    parentElement: HTMLElement | null,
    name: string,
    surname: string,
  ) {
    super(parentElement, 'div');
    this.#name = name;
    this.#surname = surname;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `
      <h3>Hola ${this.#name}</h3>
      <p>Gran apellido ${this.#surname}</p>
    `;
  }
}
