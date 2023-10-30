import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up') {
                const newState = state.map(u => u);
                return newState.sort((a, b) => (a.name > b.name) ? 1 : -1) // need to fix
            }
            if(action.payload === 'down') {
                const newState = state.map(u => u);
                return newState.sort((a, b) => (b.name > a.name) ? 1 : -1) // need to fix
            }
            return state;
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
