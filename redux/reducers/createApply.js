import * as types from '../action_types';

const initialState = {
    createApplyReqesting: false,
    createApplyDone: false,
    error: false,
    errorMessage: ""
};


export default function createApplyReducer(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_APPLY_REQUEST:
            return {
                ...state,
                createApplyReqesting: true,
                error: false,
                createApplyDone: false,
            }
        case types.CREATE_APPLY_SUCCESS:
            return {
                ...state,
                createApplyReqesting: false,
                error: false,
                createApplyDone: true
            }
        case types.CREATE_APPLY_ERROR:
            return {
                ...state,
                createApplyReqesting: false,
                error: true,
                createApplyDone: false,
                errorMessage: action.errorMessage
            }
        default:
            return state;
    }
}
