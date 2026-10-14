import { createFeatureStore } from "diameter_store";
import { state } from "../primaryState.js";
import { engine } from "../../engine/engine.js";

export const usersStore = createFeatureStore({
    name: 'users',
    state: state,
    engine: engine,
    actions: ({ engine }) => ({

        async getUsers() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            let users = [];

            if(response.ok) {
                users = await response.json();
            }

            return users;
        }

    })
})