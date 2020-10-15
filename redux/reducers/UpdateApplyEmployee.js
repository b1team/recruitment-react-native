import * as types from '../action_types';

const initialState = {
   data: {},
   dataFetched: false,
   isFetching: false,
   error: false
};

export default function ApplyEmployeeReducer(state=initialState, action){
  switch (action.type) {
        case types.APPLY_EMPLOYEE_REQUEST:
          return {
            ...state,
            data: {},
            isFetching: true
          }
        case types.APPLY_EMPLOYEE_SUCCESS:
          return {
            ...state,
            isFetching: false,
            data: action.data
          }
        case types.APPLY_EMPLOYEE_ERROR:
          return {
            ...state,
            isFetching: false,
            error: true
          }
        default:
          return state
      }
} 