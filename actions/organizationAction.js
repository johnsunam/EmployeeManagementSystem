import OrganizationApi from '../api/organizationApi';
import { GET_ORGS, GET_ORG, SAVE_ORG } from '../types'

export const loadOrganization = data => {
    return {
        type: GET_ORGS,
        data
    }
}

export const loadSelectedOrg = data => {
    return {
        type: GET_ORG,
        data
    }
}

export const addNewOrg =  data => {
    return {
        type: SAVE_ORG,
        data
    }
}

export const getOrganization = () => dispatch => {
    return OrganizationApi.getOrganization().then(result => {
        const { status, data } = result;
        dispatch(loadOrganization(data))
    })
    .catch(err => console.log(err))
}

export const selectOrganization = (data) => dispatch => {
    if ( data ) {
       return dispatch(loadSelectedOrg(data))
    } 
}

export const getOrganizationById = id => dispatch => {
    return OrganizationApi.getOrganizationById(id)
                            .then(result => {
                                dispatch(loadSelectedOrg(result.data))
                                return result
                            })
                            .catch(err => console.log(err))
}

export const createOrganization = data => (dispatch, getState) => {
    return OrganizationApi.createOrganization(data).then(result => {
        let orgs = [...getState().organizations]
        orgs.push(result.data.data)
        return dispatch(loadOrganization(orgs))
    })
    .catch(err => console.log(err))
}
 
