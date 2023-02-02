import Button from '../Button/Button.js';

const appContainer = document.querySelector('.app-container') as HTMLElement;

const btn = new Button('My button', 'submit', appContainer);
const newBtn = new Button('b', 'button', appContainer);

export const appInit = () => {
  btn.render();
  newBtn.render();
  console.log('hola');
};
