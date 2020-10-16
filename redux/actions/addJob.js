import * as types from '../action_types';
import axios from 'axios';
import * as CONSTANTS from '../constants';

export function addJobRequest() {
    return {
        type: types.ADD_JOB_REQUEST
    }
}

export function addJobError(error_message) {
    return {
        type: types.ADD_JOB_ERROR,
        errorMessage: error_message,
        error: true
    }
}

export function addJobSuccess() {
    return {
        type: types.ADD_JOB_SUCCESS
    }
}


function handleErrorMessage(response){
    const message = CONSTANTS.status_message_mapping[response.status]
    if(!message){
        return JSON.stringify(response.data.detail)
    }
    return message
}

export function addJob(identities, jobData) {
    const token = identities.access_token
    return (dispatch) => {
        dispatch(addJobRequest())
        axios({
            method: "POST",
            url: "http://recruitment.api.pythonistavn.com/api/v1/jobs",
            data: {
                ...jobData
            },
            headers: {
                Authorization: "Bearer " + token
            }
        })
          .then((response) => {
            dispatch(addJobSuccess())
          })
          .catch((err) => {console.log(err); dispatch(addJobError(handleErrorMessage(err.response)))})
      }
}
