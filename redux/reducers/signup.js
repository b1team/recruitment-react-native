import * as types from '../action_types';

const initialState = {
    signupRequesting: false,
    signupDone: false,
    error: false,
    errorMessage: ""
};


export default function signupReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGNUP_REQUEST:
            return {
                ...state,
                signupRequesting: true
            }
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                signupRequesting: false,
                signupDone: true
            }
        case types.SIGNUP_ERROR:
            return {
                ...state,
                signupRequesting: false,
                error: action.error,
                errorMessage: action.errorMessage
            }
        default:
            return state;
    }
}
