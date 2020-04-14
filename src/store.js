import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from './reducers/rootReducers';
import initialState from './initialState'

const enhancer = compose(applyMiddleware(thunk, logger));
// const enhancer = compose(applyMiddleware(thunk, logger), window.devToolsExtension ? window.devToolsExtension() : (f) => f);
const store = createStore(rootReducers, initialState, enhancer);

export default store;
