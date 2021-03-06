import * as types from '../action_types';
import axios from 'axios';


export function getAppliesData() {
    return {
        type: types.FETCHING_APPLIES_DATA
    }
}

export function getAppliesDataSuccess(data) {
    return {
        type: types.FETCHING_APPLIES_DATA_SUCCESS,
        data
    }
}

export function getAppliesDataFailure() {
    return {
        type: types.FETCHING_APPLIES_DATA_FAILURE
    }
}

export function fetchAppliesData(identities) {
    return (dispatch) => {
        dispatch(getAppliesData())
        const config = {
            headers: { Authorization: `Bearer ${identities.access_token}` }
        };
        var employer_id = identities.employer_id
        axios.get(`http://recruitment.api.pythonistavn.com/api/v1/employers/${employer_id}/applies`,
            config)
            .then(response => { dispatch(getAppliesDataSuccess(response.data)) })
            .catch((error) => console.error(error.response))
    }
}