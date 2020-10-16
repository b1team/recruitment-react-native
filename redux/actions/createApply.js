import * as types from '../action_types';
import axios from 'axios';
import * as CONSTANTS from '../constants';

export function createApplyRequest() {
    return {
        type: types.CREATE_APPLY_REQUEST
    }
}

export function createApplyError(error_message) {
    return {
        type: types.CREATE_APPLY_ERROR,
        errorMessage: error_message,
        error: true
    }
}

export function createApplySuccess() {
    return {
        type: types.CREATE_APPLY_SUCCESS
    }
}


function handleErrorMessage(response){
    const message = CONSTANTS.status_message_mapping[response.status]
    if(!message){
        return JSON.stringify(response.data.detail)
    }
    return message
}

export function createApply(identities, applyData) {
    const token = identities.access_token
    return (dispatch) => {
        dispatch(createApplyRequest())
        axios({
            method: "POST",
            url: "http://recruitment.api.pythonistavn.com/api/v1/applies",
            data: {
                ...applyData
            },
            headers: {
                Authorization: "Bearer " + token
            }
        })
          .then((response) => {
            dispatch(createApplySuccess())
          })
          .catch((err) => {console.log(err); dispatch(createApplyError(handleErrorMessage(err.response)))})
      }
}
