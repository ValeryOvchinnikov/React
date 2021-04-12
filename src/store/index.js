import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';

const logger = store => next => action => {
  let result;
  console.groupCollapsed('dispatching', action.type);
  console.log('previous state', store.getState());
  console.log('action', action);
  // eslint-disable-next-line prefer-const
  result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const middleware = applyMiddleware(thunk, logger);
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(cardReducer, composeEnchancers(middleware));

export default store;
