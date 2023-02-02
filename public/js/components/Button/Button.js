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
var _Button_text, _Button_btnType;
import Component from '../Components.js';
export default class Button extends Component {
    constructor(text, btnType, parentElement, cssClasses = '') {
        super(parentElement, 'Button', cssClasses);
        _Button_text.set(this, void 0);
        _Button_btnType.set(this, void 0);
        __classPrivateFieldSet(this, _Button_text, text, "f");
        __classPrivateFieldSet(this, _Button_btnType, btnType, "f");
    }
    render() {
        super.render();
        this.element.textContent = __classPrivateFieldGet(this, _Button_text, "f");
        this.element.setAttribute('type', __classPrivateFieldGet(this, _Button_btnType, "f"));
    }
}
_Button_text = new WeakMap(), _Button_btnType = new WeakMap();
