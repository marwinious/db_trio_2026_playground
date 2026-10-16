import { engine } from "./engine/engine.js";
import { state } from "./store/primaryState.js";
import { createLogger } from "vertex_engine";
import { store } from "./store/store.js";

const getLogger = createLogger({
    level: 'debug',
    enabled: true
});

const logger = getLogger('main', 'debug', true);
logger.debug('Test message from main.js logger')

const app = document.getElementById('app');

function render() {
    const tpl = /*html*/`
        <h1>This is a test of ${state.getState('appTitle')}</h1>
    `;

    app.innerHTML = tpl;
}

function changeAppName(newName) {
    state.setState({appTitle: newName});
    render();
}

render();
changeAppName('Something entirely different');

async function getUsers() {
    let users = await store.users.actions.getUsers();
    logger.debug('Got users in main.js', users);
}

async function getPosts() {
    let posts = await store.posts.actions.getPosts();
    logger.debug('Got posts in main.js', posts);
}

getUsers();
getPosts();

function updateCount() {
    state.setState({ count: 1 });
}

setTimeout(() => {
    updateCount();
}, 2000);