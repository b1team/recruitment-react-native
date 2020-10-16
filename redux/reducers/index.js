import { combineReducers } from 'redux';
import authReducer from './auth';
import ApplyEmployeeReducer from './AppliedEmployee'
import UpdateApplyReducer from './UpdateApplyEmployee'
import DeleteApplyReducer from './DeleteApplyEmployee'

const rootReducer = combineReducers({
    authReducer, ApplyEmployeeReducer, UpdateApplyReducer, DeleteApplyReducer
});

export default rootReducer;