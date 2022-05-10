import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserState } from '../types';

const defaultUserState: UserState = {
  searchValue: '',
  user: null,
  statusLoaded: null,
};

export const fetchUser = createAsyncThunk(
  'userReducer/fetchUser',
  async (username: string, { rejectWithValue }) => {
    const url = `https://api.github.com/users/${username}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'userReducer',
  initialState: defaultUserState,
  reducers: {
    newSearch(state, { payload }: { payload: string }) {
      state.searchValue = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.statusLoaded = false;
    }),
      builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.statusLoaded = true;
      }),
      builder.addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.statusLoaded = true;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { newSearch } = userSlice.actions;
