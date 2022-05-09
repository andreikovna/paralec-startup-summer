import { store } from './store';

export type UserState = {
  searchValue: string;
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  statusLoading: null | boolean;
  error: null | string;
  html_url: string;
};

export type PayloadFetchingType = {
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
};

export type AppDispatch = typeof store.dispatch;
