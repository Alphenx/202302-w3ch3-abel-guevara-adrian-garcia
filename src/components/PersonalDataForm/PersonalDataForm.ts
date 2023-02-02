import Button from '../Button/Button.js';
import Component from '../Components.js';

export default class Form extends Component {
  #textName: string;
  #textLastName: string;
  #submitButton: Button;

  constructor(
    textName: string,
    textLastName: string,
    parentElement: HTMLElement | null,
    cssClasses: string = 'app-container__form',
  ) {
    super(parentElement, 'form', cssClasses);
    this.#textName = textName;
    this.#textLastName = textLastName;
    this.#submitButton = new Button('Submit con clase', 'submit', this.element);
  }

  render(): void {
    super.render();
    this.element.innerHTML = `
      <label for="name">${this.#textName}</label>
      <input type="text" name="nameApp" id="name" placeholder="Enter your Name" required>
      <label for="last-name">${this.#textLastName}</label>
      <input type="text" name="lastName" id="last-name" placeholder="Enter your Last Name" required>
    `;
    this.#submitButton.render();
  }

  registerSubmit(listener: (_name: string, _surname: string) => void) {
    this.element.addEventListener('submit', (event: SubmitEvent) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      listener(form?.nameApp.value, form?.lastName.value);
    });
  }
}
