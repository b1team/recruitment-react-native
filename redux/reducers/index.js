import { combineReducers } from 'redux';
import authReducer from './auth';
import signupReducer from './signup';

const rootReducer = combineReducers({
    authReducer,
    signupReducer
});

export default rootReducer;