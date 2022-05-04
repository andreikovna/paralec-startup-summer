export type UserState = {
  searchValue: string;
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  loading: boolean;
};

export type PayloadType = {
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
};
