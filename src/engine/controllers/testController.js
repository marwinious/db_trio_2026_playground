import { defineController } from "vertex_engine";

export const testController = defineController({
    name: 'test',
    logLevel: 'debug',
    logEnabled: true,
    setup({ state, logger, events}) {

        return {
            
            testMethod() {
                logger.info('Testing from logger in controller', "TEST")
                logger.warn('Testing warn from logger in controller', 'Testing warn');
            }

        }

    }
})