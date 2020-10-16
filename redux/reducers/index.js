import { combineReducers } from 'redux';
import authReducer from './auth';


import upgradeUserReducer from './upgrade';
import ApplyReducer from './employer_apply'
import dataAppliesReducer from './GetJobsApplies'
import signupReducer from './signup';
import addJobReducer from './addJob';
  import ApplyEmployeeReducer from './AppliedEmployee'
import UpdateApplyReducer from './UpdateApplyEmployee'
import DeleteApplyReducer from './DeleteApplyEmployee'

const rootReducer = combineReducers({
    authReducer,
    signupReducer,
    ApplyReducer,
    dataAppliesReducer,
    upgradeUserReducer,
    addJobReducer, ApplyEmployeeReducer, UpdateApplyReducer, DeleteApplyReducer

});

export default rootReducer;