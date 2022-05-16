import React from 'react';

import { useAppSelector } from '../../../../redux/store';
import { DescriptionRepo, NameRepoLink, WrapperRepo } from './paginatedRepos.styled';

export function PaginatedRepos() {
  const { repos } = useAppSelector((state) => state.repoReducer);

  return (
    <>
      {repos &&
        repos.map((repo, index) => {
          return (
            <WrapperRepo key={index}>
              <NameRepoLink href={repo.html_url} target="_blank">
                {repo.name}
              </NameRepoLink>
              <DescriptionRepo>{repo.description}</DescriptionRepo>
            </WrapperRepo>
          );
        })}
    </>
  );
}
