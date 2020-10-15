import * as types from '../action_types';
import axios from 'axios';

export function loginRequest() {
    return {
        type: types.LOGIN_REQUEST
    }
}

export function loginError(error) {
    return {
        type: types.LOGIN_ERROR,
        errorMessage: error
    }
}

export function loginSuccess(identities) {
    return {
        type: types.LOGIN_SUCCESS,
        identities: identities
    }
}
export function logoutAction() {
    return {
        type: types.LOGOUT
    };
}

export function login(email, password) {
    return (dispatch) => {
        dispatch(loginRequest())
        axios({
            method: "POST",
            url: "http://recruitment.api.pythonistavn.com/api/v1/login",
            data: {
                email: email,
                password: password
            }
        })
          .then((response) => {
            dispatch(loginSuccess(response.data))
          })
          .catch((err) => {console.log('err:', err); dispatch(loginError(JSON.stringify(err)))})
      }
}
