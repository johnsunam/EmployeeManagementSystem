import UserApi from '../api/userApi';
import { GET_USERS, SAVE_USER } from '../types';


export const loadUser = data => {
    return {
        type: GET_USERS,
        data
    }
}

export const createUser = data => dispatch => {
    return UserApi.createUser(data)
                .then(result => {
                    console.log('rrrrrssss', result)
                })
}

export const getUser = (data) => dispatch => {
    return UserApi.getUser(data)
                .then(result => {
                    dispatch(loadUser(result.data))
                    return result
                })
}

// export const createUser = (data) => dispatch => {
//     return UserApi.createUser(data)
//                 .then(result => {
//                     console
//                 })
// }