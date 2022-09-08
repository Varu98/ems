import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/toast';
const { toast } = createStandaloneToast();

const id = 'success-toast';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const { data } = await axios.get('https://gorest.co.in/public/v2/users', {
    headers: {
      Authorization:
        'Bearer d7dc1bcd537dc8663264a6c7dc948e094be254a215e12bdc712b109432882a5f',
    },
  });
  return data;
});

export const postNewUserCredentials = createAsyncThunk(
  'users/createNewUser',
  async (newUser, { rejectWithValue }) => {
    try {
      console.log(newUser);
      const { data } = await axios.post(
        'https://gorest.co.in/public/v2/users',
        { ...newUser },
        {
          headers: {
            Authorization:
              'Bearer d7dc1bcd537dc8663264a6c7dc948e094be254a215e12bdc712b109432882a5f',
          },
        }
      );
    } catch (error) {
      rejectWithValue(error);
      console.log(error);
    }
  }
);
const initialState = {
  createUser: {
    email: '',
    name: '',
  },
  users: [],
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.createUser = action.payload;
      console.log(state.createUser);
    },
    getNewUserEmail: (state, action) => {
      console.log(state.createUser, action.payload);
      state.createUser.email = action.payload.email;
      state.createUser.name = action.payload.password;
    },
    deleteUserByAdmin: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = [{ name: 'admin', email: 'admin' }, ...action.payload];
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
    [postNewUserCredentials.fulfilled]: (state, action) => {
      state.createUser = action.payload;
      state.users.push(action.payload);
    },
    [postNewUserCredentials.rejected]: (state, action) => {
      state.error = action.payload;
      console.log(state.error);
    },
  },
});
export const { createUser, getNewUserEmail, deleteUserByAdmin } =
  userSlice.actions;
export default userSlice.reducer;
