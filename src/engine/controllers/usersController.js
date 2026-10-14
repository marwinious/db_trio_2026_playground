import { defineController } from "vertex_engine";

export const usersController = defineController({
    name: 'users',
    logLevel: 'debug',
    logEnabled: true,
    setup({ state, logger, events}) {

        return {
            
            async getUsers() {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                let users = [];

                if(response.ok) {
                    users = await response.json();
                }

                logger.debug('Got users from engine!', users)

                return users;
            }

        }

    }
})