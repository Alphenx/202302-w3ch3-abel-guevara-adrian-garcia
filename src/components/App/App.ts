import Button from '../Button/Button.js';
import Component from '../Components.js';
import Greeting from '../Greeting/Greeting.js';
import Form from '../PersonalDataForm/PersonalDataForm.js';

// const appContainer = document.querySelector('.app-container') as HTMLElement;

// const newBtn = new Button('My button', 'button', appContainer);
// const newForm = new Form('Nombre:', 'Apellidos:', appContainer);

// export const appInit = () => {
//   newBtn.render();
//   newForm.render();
// };

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, 'div');
    this.#children = [
      new Button('Hola', 'button', this.element),
      new Form('name', 'surname', this.element),
      new Form('name', 'surname', this.element),
      new Form('name', 'surname', this.element),
      new Button('Adios', 'button', this.element),
      new Button('demo', 'button', this.element),
      new Button('otro', 'button', this.element),
    ];
    this.#children[0].registerClick(() =>
      console.log('Click registrado desde app'),
    );
    this.#children[4].registerClick(() => {
      this.#children[5].changeClassname('button--angry');
    });
    const submitForm = this.#children[1] as Form;
    submitForm.registerSubmit((name, surname) => {
      const greetingComponent = new Greeting(this.element, name, surname);
      this.#children.push(greetingComponent);
      greetingComponent.render();
      setTimeout(() => {
        greetingComponent.remove();
      }, 2000);
    });
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
