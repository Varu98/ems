import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userIs: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});
