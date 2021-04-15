import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: {
    username: 'testAdmin@gmail.com',
    password: '12345yuiopp',
  },
  currentUser: {
    authData: {
      username: null,
      password: null,
    },

    role: null,
  },
  isAuth: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.currentUser.authData = action.payload;
      state.isAuth = true;
      JSON.stringify(action.payload) === JSON.stringify(state.admin)
        ? (state.currentUser.role = 'admin')
        : (state.currentUser.role = 'user');
      localStorage.setItem('auth-token', JSON.stringify(state.currentUser));
    },
    logOut: state => {
      state.currentUser = initialState.currentUser;
      state.isAuth = false;
      localStorage.removeItem('auth-token');
    },
  },
});

export const { authorize, logOut } = authReducer.actions;
export default authReducer.reducer;
