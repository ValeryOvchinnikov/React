import { v4 as uuidv4 } from 'uuid';
import {
  CREATE_CARD,
  DELETE_CARD,
  UPDATE_CARD,
  SELECT_CARD,
  SWITCH_READONLY,
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/types';

const initialState = {
  cards: [],
  loading: false,
  error: null,
  isReadOnly: false,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: uuidv4(),
            title: '',
            text: '',
            selected: false,
          },
        ],
      };

    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => !card.selected),
      };

    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.id
            ? {
                ...card,
                title: action.payload.title,
                text: action.payload.text,
              }
            : card,
        ),
      };

    case SELECT_CARD:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.id
            ? { ...card, selected: !card.selected }
            : card,
        ),
      };

    case SWITCH_READONLY:
      return {
        ...state,
        isReadOnly: !state.isReadOnly,
      };

    case FETCH_DATA_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        cards: action.payload.cards,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cards: [],
      };
    default:
      return state;
  }
};

export default cardReducer;
