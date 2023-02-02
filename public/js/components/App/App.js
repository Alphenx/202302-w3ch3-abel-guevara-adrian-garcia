import Button from '../Button/Button.js';
import Form from '../PersonalDataForm/PersonalDataForm.js';
const appContainer = document.querySelector('.app-container');
const newBtn = new Button('My button', 'button', appContainer);
const newForm = new Form('Nombre:', 'Apellidos:', appContainer);
export const appInit = () => {
    newBtn.render();
    newForm.render();
};
