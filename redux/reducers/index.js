import { combineReducers } from 'redux';
import authReducer from './auth';
import ApplyEmployeeReducer from './UpdateApplyEmployee'

const rootReducer = combineReducers({
    authReducer, ApplyEmployeeReducer
});

export default rootReducer;