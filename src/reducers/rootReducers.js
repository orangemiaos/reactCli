import {combineReducers} from 'redux';
import counterReducer from './counterReducer'
import getListReducer from './getListReducer'

const rootReducers = combineReducers({
    counter: counterReducer,
    getList: getListReducer
});
export default rootReducers;
