import * as types from '../action_types';

const initialState = {
    addJobReqesting: false,
    addJobDone: false,
    error: false,
    errorMessage: ""
};


export default function addJobReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_JOB_REQUEST:
            return {
                ...state,
                addJobReqesting: true,
                error: false,
                addJobDone: false,
            }
        case types.ADD_JOB_SUCCESS:
            return {
                ...state,
                addJobReqesting: false,
                error: false,
                addJobDone: true
            }
        case types.ADD_JOB_ERROR:
            return {
                ...state,
                addJobReqesting: false,
                error: true,
                addJobDone: false,
                errorMessage: action.errorMessage
            }
        default:
            return state;
    }
}
