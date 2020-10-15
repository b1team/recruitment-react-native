import { combineReducers } from 'redux';
import authReducer from './auth';
import upgradeUserReducer from './upgrade';
import ApplyReducer from './employer_apply'
import dataAppliesReducer from './GetJobsApplies'
import signupReducer from './signup';

const rootReducer = combineReducers({
    authReducer,
    signupReducer,
    ApplyReducer,
    dataAppliesReducer,
    upgradeUserReducer
});

export default rootReducer;