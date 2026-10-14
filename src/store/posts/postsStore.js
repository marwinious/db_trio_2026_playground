import { createFeatureStore } from "diameter_store";
import { state } from "../primaryState.js";
import { engine } from "../../engine/engine.js";

export const postsStore = createFeatureStore({
    name: 'posts',
    state: state,
    engine: engine,
    actions: ({ engine }) => ({

        async getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let posts = [];

            if(response.ok) {
                posts = await response.json();
            }

            return posts;
        }

    })
})