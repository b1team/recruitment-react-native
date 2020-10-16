import * as types from '../action_types';

const initialState = {
    data: {
        description: null,
        cv: null
    },
    error: false
};


export default function UpdateApplyReducer(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_EMPLOYEE_APPLY_REQUEST:
            return {
                ...state
            }
        case types.UPDATE_EMPLOYEE_APPLY_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        case types.UPDATE_EMPLOYEE_APPLY_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}