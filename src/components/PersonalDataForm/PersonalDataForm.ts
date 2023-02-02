import Component from '../Components.js';

export default class Form extends Component {
  #textName: string;
  #textLastName: string;

  constructor(
    textName: string,
    textLastName: string,
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'form', cssClasses);
    this.#textName = textName;
    this.#textLastName = textLastName;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `
    <form class="app-container__form">
        <label for="name">${this.#textName}</label>
    <input type="text" name="name" id="name" placeholder="Enter your Name" required>
            <label for="last-name">${this.#textLastName}</label>
    <input type="text" name="last-name" id="last-name" placeholder="Enter your Last Name" required>
    <input type="submit" value="Submit">
    </form>
    `;
  }

  catchData(): void {
    const data = document.getElementById('name')?.nodeValue;
    alert(data);
  }
}
