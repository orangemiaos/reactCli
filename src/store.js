import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from './reducers/rootReducers';
import initialState from './initialState'

// applyMiddleware 支持异步action
const enhancer = compose(applyMiddleware(thunk, logger));
// params:rootReducers: reducer 集合
// params:rootReducers: initialState 每个reducer对应的它的初始数据
// params:rootReducers: 支持异步action
const store = createStore(rootReducers, initialState, enhancer);

export default store;
