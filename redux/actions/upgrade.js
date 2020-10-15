import * as types from '../action_types';
import axios from 'axios';
import * as CONSTANTS from '../constants';


const upgrade_user_api_mapping = {
    employee: "http://recruitment.api.pythonistavn.com/api/v1/employees",
    employer: "http://recruitment.api.pythonistavn.com/api/v1/employers"
}


export function upgradeStart() {
    return {
        type: types.UPGRADE_USER_START
    }
}

export function upgradeError(error_message) {
    return {
        type: types.UPGRADE_USER_ERROR,
        errorMessage: error_message,
        error: true
    }
}

export function upgradeSuccess() {
    return {
        type: types.UPGRADE_USER_SUCCESS,
    }
}


function handleErrorMessage(response){
    const status_message_mapping = {
        422: "Thông tin nhập vào không hợp lệ",
        401: "Thông tin xác thực không chính xác",
        403: "Bạn không được phép thực hiện hành động này"
    }
    message = status_message_mapping[response.status]
    if(!message){
        return JSON.stringify(response.data.detail)
    }
    return message
}

export function upgrade(token, user_type, info = {}) {
    // console.log("TOKEN: " + token)
    return (dispatch) => {
        dispatch(upgradeStart())
        const url = upgrade_user_api_mapping[user_type]
        axios({
            method: "POST",
            url: url,
            data: {
                ...info
            },
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
          .then((response) => {
            dispatch(upgradeSuccess())
          })
          .catch((err) => {console.log(err.response); dispatch(upgradeError(handleErrorMessage(err.response)))})
      }
}

export function upgradeToEmployee(token) {
    return (dispatch) => {
        dispatch(upgrade(token, "employee"))
      }
}

export function upgradeToEmployer(token, employer_info) {
    return (dispatch) => {
        dispatch(upgrade(token, "employer", employer_info))
      }
}