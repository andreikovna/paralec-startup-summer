import React from 'react';
import { RepositoriesData } from './RepositoriesData/RepositoriesData';
import { DivData } from './userData.styled';
import { UserInfo } from './UserInfo/UserInfo';

export function UserData() {
  return (
    <DivData>
      <UserInfo />
      <RepositoriesData />
    </DivData>
  );
}
