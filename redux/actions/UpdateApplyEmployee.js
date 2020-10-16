import * as types from '../action_types';
import axios from 'axios';


export function UpdateApplyData() {
    return {
        type: types.UPDATE_EMPLOYEE_APPLY_REQUEST
    }
}

export function UpdateApplySuccess(data) {
    console.log("DATA")
    console.log(data);
    return {
        type: types.UPDATE_EMPLOYEE_APPLY_SUCCESS,
        data
    }
}

export function UpdateApplyError() {
    return {
        type: types.UPDATE_EMPLOYEE_APPLY_ERROR
    }
}

export function UpdateData(apply_id, token) {
    return (dispatch) => {
        dispatch(UpdateApplyData())
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.put(`http://recruitment.api.pythonistavn.com/api/v1/applies/${apply_id}`,
            config)
            .then(response => { dispatch(UpdateApplySuccess(response.data)) })
            .catch((error) => console.error(error))
    }
}