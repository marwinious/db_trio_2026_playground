import { defineController } from "vertex_engine";

export const usersController = defineController({
    name: 'users',
    logLevel: 'debug',
    logEnabled: true,
    setup({ state, logger, events, http}) {

        return {
            
            async getUsers() {
                const response = await http.get('/users');
                console.log({response});
                
                let users = [];

                if(response) {
                    users = response;
                }

                logger.debug('Got users from engine!', users)

                return users;
            }

        }

    }
})