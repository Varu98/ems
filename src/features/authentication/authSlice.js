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
      state.user = { ...action.payload[0] };
      console.log(state.user);
    },
  },
});
export const { addUser } = authSlice.actions;
export default authSlice.reducer;
