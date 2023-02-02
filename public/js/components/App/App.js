var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _App_children;
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
    constructor(parentElement) {
        super(parentElement, 'div');
        _App_children.set(this, void 0);
        __classPrivateFieldSet(this, _App_children, [
            new Button('Hola', 'button', this.element),
            new Form('name', 'surname', this.element),
            new Form('name', 'surname', this.element),
            new Form('name', 'surname', this.element),
            new Button('Adios', 'button', this.element),
            new Button('demo', 'button', this.element),
            new Button('otro', 'button', this.element),
        ], "f");
        __classPrivateFieldGet(this, _App_children, "f")[0].registerClick(() => console.log('Click registrado desde app'));
        __classPrivateFieldGet(this, _App_children, "f")[4].registerClick(() => {
            __classPrivateFieldGet(this, _App_children, "f")[5].changeClassname('button--angry');
        });
        const submitForm = __classPrivateFieldGet(this, _App_children, "f")[1];
        submitForm.registerSubmit((name, surname) => {
            const greetingComponent = new Greeting(this.element, name, surname);
            __classPrivateFieldGet(this, _App_children, "f").push(greetingComponent);
            greetingComponent.render();
            setTimeout(() => {
                greetingComponent.remove();
            }, 2000);
        });
    }
    render() {
        super.render();
        __classPrivateFieldGet(this, _App_children, "f").forEach(component => component.render());
    }
}
_App_children = new WeakMap();
