import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const URL =
  'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';

export const fetchCards = createAsyncThunk('cards/fetchCardsStatus', async () => {
  const res = await axios.get(URL);
  return res.data.slice(0, 15).map(pokemon => {
    return {
      id: pokemon.Number,
      title: pokemon.Name,
      text: pokemon.About,
      selected: false,
    };
  });
});
