import { defineController } from "vertex_engine";

export const postsController = defineController({
    name: 'posts',
    logLevel: 'debug',
    logEnabled: true,
    setup({ state, logger, events, http}) {

        return {
            
            async getUsers() {
                const response = await http.get('/posts');
                console.log({response});
                
                let posts = [];

                if(response) {
                    posts = response;
                }

                logger.debug('Got posts from engine!', posts)

                return posts;
            }

        }

    }
})