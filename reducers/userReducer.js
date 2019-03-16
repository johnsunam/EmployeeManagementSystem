import { GET_USERS, SAVE_USER } from '../types';

export const UserReducer = (state = {data:[], header: []}, action) => {
    switch (action.type) {
        case GET_USERS: 
            return {
                ...action.data
            }
        case SAVE_USER:
            return [
                ...state,
                {...action.data}
            ]
        default:
            return state
    }
}