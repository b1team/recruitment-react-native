import * as types from '../action_types';

const initialState = {
    userName: null,
    userType: null,
    token: null
};

var fake = {
    userName: "vuonglv",
    userType: "viewer",
    token: "token_ne"
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN:
            console.log("LOGIN")
            return {
                ...state,
                ...fake
            }
        case types.LOGOUT:
            console.log("LOGOUT")
            return initialState
        default:
            return state;
    }
}
