import * as types from '../action_types';

const initialState = {
   data: {},
   dataFetched: false,
   isFetching: false,
   error: false
};

export default function dataAppliesReducer(state=initialState, action){
  console.log("============DATAaPPLIESREDUCER=================");  
  switch (action.type) {
        case types.FETCHING_APPLIES_DATA:
          return {
            ...state,
            data: {},
            isFetching: true
          }
        case types.FETCHING_APPLIES_DATA_SUCCESS:
          console.log("STATE BAN DAU:" + JSON.stringify(action.data));
          return {
            ...state,
            isFetching: false,
            data: action.data
          }
        case types.FETCHING_APPLIES_DATA_FAILURE:
          return {
            ...state,
            isFetching: false,
            error: true
          }
        default:
          return state
      }
}