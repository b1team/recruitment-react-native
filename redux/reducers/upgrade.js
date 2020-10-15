import * as types from '../action_types';

const initialState = {
    upgradeUserReqesting: false,
    upgradeUserDone: false,
    error: false,
    errorMessage: ""
};


export default function upgradeUserReducer(state = initialState, action) {
    switch (action.type) {
        case types.UPGRADE_USER_START:
            return {
                ...state,
                upgradeUserReqesting: true,
                error: false,
                upgradeUserDone: false,
            }
        case types.UPGRADE_USER_SUCCESS:
            return {
                ...state,
                upgradeUserReqesting: false,
                error: false,
                upgradeUserDone: true
            }
        case types.UPGRADE_USER_ERROR:
            return {
                ...state,
                upgradeUserReqesting: false,
                error: true,
                upgradeUserDone: false,
                errorMessage: action.errorMessage
            }
        default:
            return state;
    }
}
