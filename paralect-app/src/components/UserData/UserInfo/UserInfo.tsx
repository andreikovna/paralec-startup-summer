import React from 'react';
import { useAppSelector } from '../../../redux/store';
import { UserType } from '../../../redux/types';

import {
  DivUser,
  ImgUser,
  WrapperFollowersInfo,
  NameParagraph,
  LinkUser,
  ImgFollowers,
  ImgFollowing,
  FollowersWrappers,
} from './userInfo.styled';

export function UserInfo() {
  const { user } = useAppSelector((state) => state.userReducer);
  const { name, login, followers, following, avatar_url, html_url } = user as UserType;

  const followersUA = followers > 1000 ? `${(followers / 1000).toFixed(1)}k` : `${followers}`;
  const followingsUA = following > 1000 ? `${(following / 1000).toFixed(1)}k` : `${following}`;

  return (
    <DivUser>
      <ImgUser src={avatar_url}></ImgUser>
      <NameParagraph>{name}</NameParagraph>
      <LinkUser href={html_url} target="_blank" rel="noopener noreferrer">
        {login}
      </LinkUser>
      <WrapperFollowersInfo>
        <FollowersWrappers>
          <ImgFollowers />
          <p>{followersUA} followers</p>
        </FollowersWrappers>
        <FollowersWrappers>
          <ImgFollowing />
          <p>{followingsUA} following</p>
        </FollowersWrappers>
      </WrapperFollowersInfo>
    </DivUser>
  );
}
