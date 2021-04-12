import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(cardReducer, composeEnchancers(applyMiddleware(thunk)));

export default store;
