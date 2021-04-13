import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: {
    username: 'testAdmin@gmail.com',
    password: '12345yuiopp',
    role: 'admin',
  },
  currentUser: null,
};

const AuthReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      localStorage.setItem('auth-token', JSON.stringify(action.payload));
      state.currentUser = action.payload;
    },
    logOut: state => {
      state.currentUser = null;
      localStorage.removeItem('auth-token');
    },
  },
});
