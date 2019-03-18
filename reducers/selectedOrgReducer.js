import { GET_ORG, SAVE_ORG, SELECT_ORG } from '../types'

export const SelectedOrgReducer = (state = {}, action) => {

    switch (action.type) {
        
        case GET_ORG: 
            return {
                ...action.data
            }
        default:
            return state
    }
}
