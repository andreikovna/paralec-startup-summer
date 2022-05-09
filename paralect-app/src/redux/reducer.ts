import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PayloadFetchingType, UserState } from './types';

const defaultUserState: UserState = {
  searchValue: '',
  name: '',
  login: '',
  followers: 0,
  following: 0,
  public_repos: 0,
  avatar_url: '',
  statusLoading: null,
  error: null,
  html_url: '',
};

export const fetchUser = createAsyncThunk(
  'userReducer/fetchUser',
  async (username: string, { rejectWithValue }) => {
    const url = `https://api.github.com/users/${username}`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
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
      state.statusLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.error = null;
      state.statusLoading = true;
    }),
      builder.addCase(
        fetchUser.fulfilled,
        (state, { payload }: { payload: PayloadFetchingType }) => {
          state.name = payload.name;
          state.login = payload.login;
          state.avatar_url = payload.avatar_url;
          state.followers = payload.followers;
          state.following = payload.following;
          state.public_repos = payload.public_repos;
          state.html_url = payload.html_url;
        }
      ),
      builder.addCase(fetchUser.rejected, (state) => {
        state.name = defaultUserState.name;
      });
  },
});

export const UserReducer = userSlice.reducer;
export const { newSearch, setLoading } = userSlice.actions;
