import { createEngine } from 'vertex_engine'
import { state } from '../store/primaryState.js'
import { testController } from './controllers/testController.js'
import { usersController } from './controllers/usersController.js';

// Init engine with global state
const engine = createEngine({ 
    stateStore: state, 
    logLevel: 'debug',
    logEnabled: true,
    httpConfig: {
        baseUrl: 'https://jsonplaceholder.typicode.com',
        timeout: 8000,
        headers: {
            'X-App-Version': '1.0.0'
        }
    }
});

// Register controllers
engine.register(testController);
engine.register(usersController);

export { engine }