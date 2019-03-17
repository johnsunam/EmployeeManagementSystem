import { GET_USER } from '../types'

export const SelectedUserReducer = (state = null, action) => {

    switch (action.type) {
        
        case GET_USER: 
            return {
                ...action.data
            }
        default:
            return state
    }
}
