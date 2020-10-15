import { combineReducers } from 'redux';
import authReducer from './auth';
import ApplyReducer from './employer_apply'
import dataAppliesReducer from './GetJobsApplies'

const rootReducer = combineReducers({
    authReducer, ApplyReducer, dataAppliesReducer
});

export default rootReducer;