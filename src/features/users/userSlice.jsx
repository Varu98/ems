import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/toast';
const { toast } = createStandaloneToast();

const id = 'success-toast';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (state, action) => {
    const { data } = await axios.get('https://gorest.co.in/public/v2/users');
    return data;
  }
);

const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      console.log(action);
      state.users = action.payload;
      state.status = 'fulfilled';
      if (!toast.isActive(id)) {
        toast({
          id,
          title: 'users loaded',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      }
    },
    [fetchUsers.pending]: state => {
      state.status = 'loading';
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { getUsers } = userSlice.actions;

export default userSlice.reducer;
