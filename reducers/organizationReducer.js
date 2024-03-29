import { GET_ORGS, SAVE_ORG } from '../types'

export const OrganizationReducer = (state = [], action) => {

    switch (action.type) {
        case GET_ORGS: 
            return [
                ...action.data
            ]

        case SAVE_ORG: 
            return [
                ...state,
                {...action.data}
            ]
        default:
            return state
    }
}
