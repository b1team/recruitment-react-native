import * as types from '../action_types';

const initialState = {
    identities: {
        id: null,
        email: null,
        user_type: null,
        access_token: null,
        employer_id: null,
        employee_id: null
    },
    loginReqesting: false,
    loginDone: false,
    error: false,
    errorMessage: ""
};


export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            console.log("LOGIN_REQUEST")
            return {
                ...state,
                loginReqesting: true
            }
        case types.LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS")
            return {
                ...state,
                loginReqesting: false,
                loginDone: true,
                identities: action.identities
            }
        case types.LOGIN_ERROR:
            console.log("LOGIN_ERROR")
            return {
                ...state,
                loginReqesting: false,
                loginDone: true,
                errorMessage: action.errorMessage
            }
        case types.LOGOUT:
            console.log("LOGOUT")
            return initialState
        default:
            return state;
    }
}
