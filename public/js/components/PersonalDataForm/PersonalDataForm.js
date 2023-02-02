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
var _Form_textName, _Form_textLastName, _Form_submitButton;
import Button from '../Button/Button.js';
import Component from '../Components.js';
export default class Form extends Component {
    constructor(textName, textLastName, parentElement, cssClasses = 'app-container__form') {
        super(parentElement, 'form', cssClasses);
        _Form_textName.set(this, void 0);
        _Form_textLastName.set(this, void 0);
        _Form_submitButton.set(this, void 0);
        __classPrivateFieldSet(this, _Form_textName, textName, "f");
        __classPrivateFieldSet(this, _Form_textLastName, textLastName, "f");
        __classPrivateFieldSet(this, _Form_submitButton, new Button('Submit con clase', 'submit', this.element), "f");
    }
    render() {
        super.render();
        this.element.innerHTML = `
      <label for="name">${__classPrivateFieldGet(this, _Form_textName, "f")}</label>
      <input type="text" name="nameApp" id="name" placeholder="Enter your Name" required>
      <label for="last-name">${__classPrivateFieldGet(this, _Form_textLastName, "f")}</label>
      <input type="text" name="lastName" id="last-name" placeholder="Enter your Last Name" required>
    `;
        __classPrivateFieldGet(this, _Form_submitButton, "f").render();
    }
    registerSubmit(listener) {
        this.element.addEventListener('submit', (event) => {
            event.preventDefault();
            const form = event.target;
            listener(form === null || form === void 0 ? void 0 : form.nameApp.value, form === null || form === void 0 ? void 0 : form.lastName.value);
        });
    }
}
_Form_textName = new WeakMap(), _Form_textLastName = new WeakMap(), _Form_submitButton = new WeakMap();
