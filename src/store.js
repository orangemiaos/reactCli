import {createStore, compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootReducers from './reducers/rootReducers';
import initialState from './initialState'

const enhancer =compose(applyMiddleware(thunk));
const store = createStore(rootReducers,initialState,enhancer);

export default store;
