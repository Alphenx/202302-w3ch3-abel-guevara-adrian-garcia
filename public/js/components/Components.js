export default class Component {
    constructor(parentElement, tag, cssClasses = '') {
        this.element = document.createElement(tag);
        this.element.className = cssClasses;
        this.parentElement = parentElement;
    }
    render() {
        var _a;
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(this.element);
    }
    doAction(listener) {
        this.element.addEventListener('click', listener);
    }
}
