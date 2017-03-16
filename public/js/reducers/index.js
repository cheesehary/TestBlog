import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import blogs from './query_all_reducer';
import current from './get_current_reducer';

const rootReducer = combineReducers({
	blogs: blogs,
	current: current,
	form: formReducer
});

export default rootReducer;