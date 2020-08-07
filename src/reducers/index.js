import {combineReducers} from 'redux';
import addUser from './newUser';
import loggedReducer from './isLogged';

const allReducers = combineReducers({
	credentials: addUser,
	isLogged: loggedReducer
});

export default allReducers;