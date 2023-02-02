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
var _Greeting_name, _Greeting_surname;
import Component from '../Components.js';
export default class Greeting extends Component {
    constructor(parentElement, name, surname) {
        super(parentElement, 'div');
        _Greeting_name.set(this, void 0);
        _Greeting_surname.set(this, void 0);
        __classPrivateFieldSet(this, _Greeting_name, name, "f");
        __classPrivateFieldSet(this, _Greeting_surname, surname, "f");
    }
    render() {
        super.render();
        this.element.innerHTML = `
      <h3>Hola ${__classPrivateFieldGet(this, _Greeting_name, "f")}</h3>
      <p>Gran apellido ${__classPrivateFieldGet(this, _Greeting_surname, "f")}</p>
    `;
    }
}
_Greeting_name = new WeakMap(), _Greeting_surname = new WeakMap();
