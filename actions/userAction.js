import UserApi from '../api/userApi';
import AcademicApi from '../api/academicApi';
import ExperienceApi from '../api/experienceApi';
import { GET_USERS, SAVE_USER, GET_USER, GET_ACADEMICS, SAVE_ACADEMIC, SAVE_EXPERIENCE, GET_EXPERIENCES } from '../types';
import _ from 'underscore';
import { get } from 'https';

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

export const loadNewUser = data => {
    console.log('new user load', data)

    return {
        type: SAVE_USER,
        data
    }
}

export const loadAcademics = data => {
    return {
        type: GET_ACADEMICS,
        data
    }
}

export const loadAcademic = data => {
    return {
        type: SAVE_ACADEMIC,
        data
    }
}

export const loadExperiences = data => {
    return {
        type: GET_EXPERIENCES,
        data
    }
}

export const loadExperience = data => {
    return {
        type: SAVE_EXPERIENCE,
        data
    }
}

export const createUser = data => (dispatch, getState) => {
    return UserApi.createUser(data)
                .then(result => {
                    console.log('rrrrrssss', result)
                    let users = getState().users
                    users.data.push(result.data.data)
                    dispatch(loadUsers({...users}))
                    return result.data;
                })
                
}

export const getUser = (data) => dispatch => {
    return UserApi.getUser(data)
                .then(result => {
                    console.log('user Result')

                    let data = _.map(result.data, data => data)
                    dispatch(loadUsers(result.data))
                    return result
                })
}

export const updateUser = data => (dispatch, getState) => {
    return UserApi.updateUser(data, getState().user._id)
            .then(result => {
                dispatch(loadUser(result.data));
                return result;
            })
}

export const deleteUser = id => (dispatch, getState) => {
    return UserApi.deleteUser(id)
            .then(result => {

                let data =  _.reject(getState().users.data, user => user._id === id)
                let preData = getState().users;
                preData.data = data;
                dispatch(loadUsers({...preData}))
                return result;
            })
            .catch(err => err)
}

export const getUserById = (user) => dispatch => {
    return UserApi.getUserById(user)
                    .then(result => {
                        dispatch(loadUser(result.data))
                        return result
                    });
}

export const createAcademic = data => dispatch => {
    return AcademicApi.createAcademic(data)
                        .then(result => {
                            dispatch(loadAcademic(result.data.data))
                        })
                        .catch(err => console.log(err));
}

export const updateAcademic = (data, id) => (dispatch, getState) => {
    return AcademicApi.updateAcademic(data, id) 
                        .then(result => {
                            let data = result.data;
                            let academicArray = _.reject(getState().academics, aca => aca._id === data._id);
                            academicArray.push(data);
                            dispatch(loadAcademics([...academicArray]));
                            return result;
                        })
                        .catch(err => console.log(err));
}

export const getAcademic = () => (dispatch, getState) => {
    return AcademicApi.getAcademic(getState().user._id)
                        .then(result => {
                            dispatch(loadAcademics(result.data));
                        })
                        .catch(err => console.log(err));
}

export const createExperience = data => dispatch => {
    return ExperienceApi.createExperience(data)
                        .then(result => {
                            dispatch(loadExperience(result.data.data));
                        })
                        .catch(err => console.log(err));
}

export const getExperience = () => (dispatch, getState) => {
    return ExperienceApi.getExperience(getState().user._id)
                        .then(result => {
                            dispatch(loadExperiences(result.data))
                        })
                        .catch(err => console.log(err));
}

export const updateExperience = (data, id) => (dispatch, getState) => {
    return ExperienceApi.updateExperience(data, id) 
                        .then(result => {
                            console.log(result)
                            let data = result.data;
                            let expArray = _.reject(getState().experiences, exp => exp._id === data._id);
                            expArray.push(data);
                            console.log('update array ', expArray)
                            dispatch(loadExperiences([...expArray]));
                            return result;
                        })
                        .catch(err => console.log(err));
}

export const deleteAcademic = (id) => (dispatch, getState) => {
    return AcademicApi.deleteAcademic(id)
            .then(result => {
                let updateArray = _.reject(getState().academics, ac => ac._id === id)
                dispatch(loadAcademics([...updateArray]))
            })
            .catch(err => console.log(err));
}


export const deleteExperience = (id) => (dispatch, getState) => {
    return ExperienceApi.deleteExperience(id)
            .then(result => {
                let updateArray = _.reject(getState().experiences, exp => exp._id === id);
                dispatch(loadExperiences([...updateArray]));
                return result;
            })
            .catch(err => console.log(err));
}
