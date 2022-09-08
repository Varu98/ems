import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.user = action.payload;
      state.isLoggedIn = true;
      console.log(state.user);
    },
    updateUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      console.log(state.user);
    },
  },
});
export const { addUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
