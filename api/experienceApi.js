
import axios from 'axios';

const api = 'http://localhost:3003/api';


class ExperienceApi {

    static getExperience (user) {
        return axios.get(`${api}/experience/${user}`)
                .then(result => result)
                .catch(err => err)
    }

    static createExperience (data) {
        return axios.post(`${api}/experience/${data.user}`, data)
                .then(result => result)
                .catch(err => err)
    }
    static updateExperience (data, id) {
        return axios.put(`${api}/experience/${id}`, data)
            .then(result => result)
            .catch(err => err)
    }

    static deleteExperience (id) {
        return axios.delete(`${api}/experience/${id}`)
                .then(result => result)
                .catch(err => err)
    }
}

export default ExperienceApi;