import * as types from '../action_types';
import axios from 'axios';


export function UpdateApplyData() {
    return {
        type: types.APPLY_EMPLOYEE_REQUEST
    }
}

export function UpdateApplySuccess(data) {
    return {
        type: types.APPLY_EMPLOYEE_SUCCESS,
        data
    }
}

export function UpdateApplyError() {
    return {
        type: types.APPLY_EMPLOYEE_ERROR
    }
}

export function UpdateData(token) {
    return (dispatch) => {
        dispatch(UpdateApplyData())
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        var apply_id = 3
        axios.put(`http://recruitment.api.pythonistavn.com/api/v1/applies/${apply_id}`,
            config)
            .then(response => { dispatch(UpdateApplySuccess(response.data)) })
            .catch((error) => console.error(error))
    }
}

export function DeleteData(token){

    return (dispatch)=>{
        dispatch(UpdateApplyData())
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        var apply_id = 3
        axios.delete(`http://recruitment.api.pythonistavn.com/api/v1/applies/${apply_id}`,
            config)
            .then(response => { dispatch(UpdateApplySuccess(response.data)) })
            .catch((error) => console.error(error))

    }
}