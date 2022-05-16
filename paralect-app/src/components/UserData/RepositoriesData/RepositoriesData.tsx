import React from 'react';

import { useAppSelector } from '../../../redux/store';
import { UserType } from '../../../redux/types';
import { NoRepositories } from './NoRepositories/NoRepositories';
import { PaginatedRepos } from './PaginatedRepos/PaginatedRepos';
import { Pagination } from './Pagination/Pagination';
import { WrapperReposData, TitleNumberRepo } from './repositoriesData.styled';

export function RepositoriesData() {
  const { public_repos } = useAppSelector((state) => state.userReducer.user as UserType);

  return (
    <WrapperReposData>
      {!!public_repos ? (
        <>
          <TitleNumberRepo>Repositories ({public_repos})</TitleNumberRepo>
          <PaginatedRepos />
          <Pagination />
        </>
      ) : (
        <NoRepositories />
      )}
    </WrapperReposData>
  );
}
