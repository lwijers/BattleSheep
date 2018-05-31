import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import socketio from './socketio';
import reducers from "./reducers";
// import { storeJwt, socketIo } from './middleware'

const socket = new socketio()

const reducer = combineReducers(reducers);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(reducer, enhancer);

export default store;
