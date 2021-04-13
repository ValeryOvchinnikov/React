import axios from 'axios';
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

const URL =
  'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchDataBegins());
    axios
      .get(URL)
      .then(res => {
        dispatch(
          fetchDataSuccess(
            res.data.slice(0, 15).map(pokemon => {
              return {
                id: pokemon.Number,
                title: pokemon.Name,
                text: pokemon.About,
                selected: false,
              };
            }),
          ),
        );
      })
      .catch(err => dispatch(fetchDataFailure(err)));
  };
};
