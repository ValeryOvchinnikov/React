import {
  CREATE_CARD,
  DELETE_CARD,
  UPDATE_CARD,
  SELECT_CARD,
  SWITCH_READONLY,
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './types';

export const createCard = () => ({ type: CREATE_CARD });

export const deleteCard = () => ({ type: DELETE_CARD });

export const updateCard = (id, title, text) => ({
  type: UPDATE_CARD,
  payload: { id, title, text },
});
export const selectCard = id => ({ type: SELECT_CARD, payload: { id } });

export const switchReadOnly = () => ({ type: SWITCH_READONLY });

export const fetchDataBegins = () => ({ type: FETCH_DATA_BEGIN });

export const fetchDataSuccess = cards => ({
  type: FETCH_DATA_SUCCESS,
  payload: { cards },
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error },
});
