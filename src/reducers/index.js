import {combineReducers} from 'redux';
import clock_reducer from './clock_reducer';

export default combineReducers({
    clock: clock_reducer
})