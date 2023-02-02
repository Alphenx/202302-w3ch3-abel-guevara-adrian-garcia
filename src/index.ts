import App from './components/App/App.js';

const appContainer = document.querySelector<HTMLElement>('.app-container');
const app = new App(appContainer);
app.render();
