import { GET_ACADEMICS, SAVE_ACADEMIC } from '../types'

export const AcademicReducer = (state = [], action) => {

    switch (action.type) {
        case GET_ACADEMICS: 
            return [
                ...action.data
            ]

        case SAVE_ACADEMIC: 
            return [
                ...state,
                {...action.data}
            ]
        default:
            return state
    }
}