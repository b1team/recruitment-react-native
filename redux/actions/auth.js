import * as types from '../action_types';

export function loginAction(username, password) {
    return {
        type: types.LOGIN,
        payload: {
            name: username,
            pass: password
        }
    };
}
export function logoutAction() {
    return {
        type: types.LOGOUT
    };
}
