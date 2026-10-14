import { createState } from 'radius_state_manager'

const defaultState = {
    count: 0,
    appTitle: 'My test app'
}

export const state = createState(defaultState);