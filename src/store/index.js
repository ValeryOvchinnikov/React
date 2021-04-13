import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cardsReducer from './reducers/cardReducer';
import authReducer from './reducers/authReducer';

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

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
}).concat(logger);

const store = configureStore({
  reducer: { cards: cardsReducer, auth: authReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
