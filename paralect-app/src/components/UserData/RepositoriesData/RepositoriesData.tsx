import React from 'react';

import { useAppSelector } from '../../../redux/store';
import { UserType } from '../../../redux/types';
import { Pagination } from '../Pagination/Pagination';
import {
  WrapperReposData,
  TitleNumberRepo,
  WrapperRepo,
  NameRepoLink,
  DescriptionRepo,
} from './repositoriesData.styled';

export function RepositoriesData() {
  const { public_repos } = useAppSelector((state) => state.userReducer.user as UserType);
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
              <DescriptionRepo key={index}>{repo.description}</DescriptionRepo>
            </WrapperRepo>
          );
        })}
      <Pagination />
    </WrapperReposData>
  );
}
