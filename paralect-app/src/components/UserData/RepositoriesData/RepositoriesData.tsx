import React from 'react';

import { useAppSelector } from '../../../redux/store';
import { Pagination } from '../Pagination/Pagination';
import {
  WrapperReposData,
  TitleNumberRepo,
  WrapperRepo,
  NameRepoLink,
} from './repositoriesDataStyles';

export function RepositoriesData() {
  const { public_repos } = useAppSelector((state) => state.userReducer);
  const repos = useAppSelector((state) => state.repoReducer.repos);

  console.log('repos', repos);

  return (
    <WrapperReposData>
      <TitleNumberRepo>Repositories ({public_repos})</TitleNumberRepo>
      {repos.length &&
        repos.map((repo, index) => {
          return (
            <WrapperRepo key={index}>
              <NameRepoLink href={repo.html_url} target="_blank" key={index}>
                {repo.name}
              </NameRepoLink>
              <p key={index}>{repo.description}</p>
            </WrapperRepo>
          );
        })}
      <Pagination />
    </WrapperReposData>
  );
}
