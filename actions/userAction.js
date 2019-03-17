import UserApi from '../api/userApi';
import { GET_USERS, SAVE_USER, GET_USER } from '../types';


export const loadUsers = data => {
    return {
        type: GET_USERS,
        data
    }
}

export const loadUser = data => {
    return {
        type: GET_USER,
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
                    console.log('user Result')
                    dispatch(loadUsers(result.data))
                    return result
                })
}

export const getUserById = (user) => dispatch => {
    return UserApi.getUserById(user)
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