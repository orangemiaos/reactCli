import {combineReducers} from 'redux';
import counterReducer from './counterReducer'
import dataListReducer from './dataListReducer'

const rootReducers = combineReducers({
    counter: counterReducer,
    dataList: dataListReducer
});
export default rootReducers;
