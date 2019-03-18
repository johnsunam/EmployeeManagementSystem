import { GET_EXPERIENCES, SAVE_EXPERIENCE } from '../types'

export const ExperienceReducer = (state = [], action) => {

    switch (action.type) {
        case GET_EXPERIENCES: 
            return [
                ...action.data
            ]

        case SAVE_EXPERIENCE: 
            return [
                ...state,
                {...action.data}
            ]
        default:
            return state
    }
}