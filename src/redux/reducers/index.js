import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import setusers from './setuser';

const rootReducer = combineReducers({
    setusers,
    form: formReducer
});

export default rootReducer