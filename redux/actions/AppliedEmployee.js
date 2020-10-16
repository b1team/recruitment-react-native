import * as types from '../action_types';
import axios from 'axios';



export function getEmployeeApplyData() {
    return {
        type: types.APPLY_EMPLOYEE_REQUEST
    }
}

export function getEmployeeApplySuccess(data) {
    return {
        type: types.APPLY_EMPLOYEE_SUCCESS,
        data
    }
}

export function getEmployeeApplyError() {
    return {
        type: types.APPLY_EMPLOYEE_ERROR
    }
}

export function fetchApplyEmployeeData(employee_id, token) {
    return (dispatch) => {
        dispatch(getEmployeeApplyData())
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get(`http://recruitment.api.pythonistavn.com/api/v1/employees/${employee_id}/applies`,
            config)
            .then(response => { dispatch(getEmployeeApplySuccess(response.data)) })
            .catch((error) => console.error(error))
    }
} 
