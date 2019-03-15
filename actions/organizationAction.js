import OrganizationApi from '../api/organizationApi';
import { GET_ORGS, GET_ORG } from '../types'

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

export const getOrganization = () => dispatch => {
    return OrganizationApi.getOrganization().then(result => {
        console.log('organization resut', result)
        const { status, data } = result;
        dispatch(loadOrganization(data))
    })
    .catch(err => console.log(err))
}

export const selectOrganization = (data) => dispatch => {
    console.log('dataaaaa', data)
    if ( data ) {
       return dispatch(loadSelectedOrg(data))
    } else {
    }
}