import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
