import * as types from '../action_types';

const initialState = {
    apply_id: null,
    status: null
};


export default function ApplyReducer(state = initialState, action) {
    console.log("++++++++++APPLYREDUCER+++++++++++++++=");
    switch (action.type) {
        case types.APPROVE_APPLY:
            console.log("STATE THAY DOI" + JSON.stringify(action.payload));
            return {
                ...state,
                apply_id: action.payload.apply_id,
                status: action.payload.applyStatus
            }
        case types.REJECT_APPLY:
            return {
                ...state,
                apply_id: action.payload.apply_id,
                status: action.payload.applyStatus
            }
        default:
            return state;
    }
}




