
import axios from 'axios';

const api = 'http://localhost:3003/api';


class OrganizationApi {

    static getOrganization () {
        return axios.get(`${api}/organization`)
                .then(result => result)
                .catch(err => err)
    }
}

export default OrganizationApi;