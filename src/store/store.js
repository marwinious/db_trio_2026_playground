import { usersStore } from "./users/usersStore.js";
import { postsStore } from "./posts/postsStore.js";

export const store = { 
    users: usersStore,
    posts: postsStore
}

// Init listeners
store.users.actions.initListeners();