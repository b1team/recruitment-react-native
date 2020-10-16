import * as types from '../action_types';
import axios from 'axios';


export function DeleteApplyData() {
    return {
        type: types.UPDATE_EMPLOYEE_APPLY_REQUEST
    }
}

export function DeleteApplySuccess() {
    return {
        type: types.UPDATE_EMPLOYEE_APPLY_SUCCESS
    }
}

export function DeleteApplyError() {
    return {
        type: types.UPDATE_EMPLOYEE_APPLY_ERROR
    }
}

export function DeleteData(apply_id, token){
    return (dispatch)=>{
        dispatch(DeleteApplyData())
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.delete(`http://recruitment.api.pythonistavn.com/api/v1/applies/${apply_id}`,
            config)
            .then(response => { dispatch(DeleteApplySuccess(response.data)) })
            .catch((error) => console.error(error))

    }
}