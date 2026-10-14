import { createFeatureStore } from "diameter_store";
import { state } from "../primaryState.js";
import { engine } from "../../engine/engine.js";

export const usersStore = createFeatureStore({
    name: 'users',
    state: state,
    engine: engine,
    actions: ({ engine }) => ({

        async getUsers() {
            const actions = engine.getActions('users');
            const users = actions.getUsers();

            return users;
        }

    })
})