
import axios from 'axios';

const api = 'http://localhost:3003/api';


class AcademicApi {

    static getAcademic (user) {
        return axios.get(`${api}/academic/${user}`)
                .then(result => result)
                .catch(err => err)
    }

    static createAcademic (data) {
        return axios.post(`${api}/academic/${data.user}`, data)
                .then(result => result)
                .catch(err => err)
    }

    static updateAcademic (data, id) {
        return axios.put(`${api}/academic/${id}`, data)
            .then(result => result)
            .catch(err => err)
    }

    static deleteAcademic (id) {
        return axios.delete(`${api}/academic/${id}`)
                .then(result => result)
                .catch(err => err)
    }
}

export default AcademicApi;