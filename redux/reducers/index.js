import { combineReducers } from 'redux';
import authReducer from './auth';
import upgradeUserReducer from './upgrade';

const rootReducer = combineReducers({
    authReducer,
    upgradeUserReducer
});

export default rootReducer;