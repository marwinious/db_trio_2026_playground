import { createEngine } from 'vertex_engine'
import { state } from '../store/primaryState.js'
import { testController } from './controllers/testController.js'

// Init engine with global state
const engine = createEngine({ 
    stateStore: state, 
    logLevel: 'debug' ,
    logEnabled: true
});

// Register controllers
engine.register(testController);

export { engine }