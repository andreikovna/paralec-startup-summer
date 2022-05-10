import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RepoStateType } from '../types';

const defaultRepos: RepoStateType = {
  repos: [],
};

export const fetchRepo = createAsyncThunk(
  'repoReducer/fetchRepo',
  async ({ username, page }: { username: string; page: number }, { rejectWithValue }) => {
    const url = `https://api.github.com/users/${username}/repos?q=&per_page=4&sort=updated&page=${page}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userRepoSlice = createSlice({
  name: 'repoReducer',
  initialState: defaultRepos,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepo.fulfilled, (state, { payload }) => {
      state.repos = payload;
    });
  },
});

export const repoReducer = userRepoSlice.reducer;
