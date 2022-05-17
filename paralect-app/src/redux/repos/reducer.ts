import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RepoStateType } from '../types';
import { REPOS_PER_PAGE } from './../../appConstants/constants';

const defaultRepos: RepoStateType = {
  repos: [],
  page: 1,
};

export const fetchRepo = createAsyncThunk(
  'repoReducer/fetchRepo',
  async ({ username, page }: { username: string; page: number }, { rejectWithValue }) => {
    const url = `https://api.github.com/users/${username}/repos?q=&sort=pushed&per_page=${REPOS_PER_PAGE}&page=${page}`;
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
  reducers: {
    setPage(state, { payload }: { payload: number }) {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepo.fulfilled, (state, { payload }) => {
      state.repos = payload;
    });
  },
});

export const repoReducer = userRepoSlice.reducer;
export const { setPage } = userRepoSlice.actions;
