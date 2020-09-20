// All the reducers which are using around redux goes here.
import { combineReducers } from 'redux';

import Auth from './auth';

const rootReducers = combineReducers({
	auth: Auth,
});

export default rootReducers;
