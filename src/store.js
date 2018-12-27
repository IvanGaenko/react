import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import reducer from './reducers';
import { loadState } from './localstorage/localstorage';

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(reducer, persistedState, composeEnhancers(applyMiddleware(thunk)));
