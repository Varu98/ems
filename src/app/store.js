import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import authReducer from '../features/authentication/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});
