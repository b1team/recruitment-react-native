import * as types from '../action_types';

const initialState = {
    data: {
        description: null,
        cv: null},
    error: false
};


export default function DeleteApplyReducer(state = initialState, action) {
    switch (action.type) {
        case types.DELETE_EMPLOYEE_APPLY_REQUESTS:
            return {
                ...state,
                data: {}
            }
        case types.DELETE_EMPLOYEE_APPLY_SUCCESS:
            return {
                ...state
            }
        case types.DELETE_EMPLOYEE_APPLY_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}