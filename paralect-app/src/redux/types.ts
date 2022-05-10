import { store } from './store';

export type UserState = {
  searchValue: string;
  statusLoaded: null | boolean;
  user: UserType | null;
};

export type UserType = {
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
};

export type RepoStateType = {
  repos: {
    name: string;
    description: string;
    html_url: string;
  }[];
};

export type AppDispatch = typeof store.dispatch;

export type RootReducerState = {
  userReducer: UserState;
  repoReducer: RepoStateType;
};
