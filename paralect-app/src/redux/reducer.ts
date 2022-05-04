import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PayloadType, UserState } from './types';

const defaultUserState: UserState = {
  searchValue: '',
  name: '',
  login: '',
  followers: 0,
  following: 0,
  public_repos: 0,
  avatar_url: '',
  loading: false,
};

export const fetchUser = createAsyncThunk(
  'user/fetchData',
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
    setLoading(state, { payload }: { payload: boolean }) {
      state.loading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, { payload }: { payload: PayloadType }) => {
      state.name = payload.name;
      state.login = payload.login;
      state.avatar_url = payload.avatar_url;
      state.followers = payload.followers;
      state.following = payload.following;
      state.public_repos = payload.public_repos;
    }),
      builder.addCase(fetchUser.rejected, (state) => {
        state.name = defaultUserState.name;
      });
  },
});

export const UserReducer = userSlice.reducer;
export const { newSearch, setLoading } = userSlice.actions;
