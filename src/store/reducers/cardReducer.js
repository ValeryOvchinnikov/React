import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from '../actions/cardActions';

const initialState = {
  cards: [],
  status: 'idle',
  error: null,
  isReadOnly: false,
};

const cardsReducer = createSlice({
  name: 'card',
  initialState,
  reducers: {
    createCard: state => {
      state.cards.push({ id: uuidv4(), title: '', text: '', selected: false });
    },

    deleteCard: state => {
      state.cards = state.cards.filter(card => !card.selected);
    },

    updateCard: (state, action) => {
      const { id, title, text } = action.payload;
      const card = state.cards.find(c => c.id === id);
      card.title = title;
      card.text = text;
    },

    selectCard: (state, action) => {
      const card = state.cards.find(c => c.id === action.payload.id);
      card.selected = !card.selected;
    },

    switchReadOnly: state => {
      state.isReadOnly = !state.isReadOnly;
    },
  },
  extraReducers: {
    [fetchCards.pending]: state => {
      state.status = 'loading';
    },
    [fetchCards.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.cards = state.cards.concat(action.payload);
    },
    [fetchCards.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {
  createCard,
  deleteCard,
  updateCard,
  selectCard,
  switchReadOnly,
} = cardsReducer.actions;
export default cardsReducer.reducer;
