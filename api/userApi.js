
import axios from 'axios';

const api = 'http://localhost:3003/api';


class UserApi {

    static getUser (data) {
        return axios.get(`${api}/user`,{params: data})
                .then(result => result)
                .catch(err => err)
    }

    static getUserById (id) {
        return axios.get(`${api}/user/${id}`)
                .then(result => result)
                .catch(err => err)
    }

    static createUser (data) {
        return axios.post(`${api}/user`, data)
    }

    static updateUser (data, id) {
        return axios.put(`${api}/user/${id}`, data)
            .then(result => result)
            .catch(err => err)
    }

    static deleteUser (id) {
        return axios.delete(`${api}/user/${id}`)
                .then(result => result)
                .catch(err => err)
    }
}

export default UserApi;