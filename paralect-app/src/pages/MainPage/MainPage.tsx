import React from 'react';
import { useAppSelector } from '../../redux/store';

export function MainPage() {
  const { name, followers, following, avatar_url } = useAppSelector((state) => state);

  return (
    <>
      <img src={avatar_url}></img>
      <p>{name}</p>
      <p>{followers}</p>
      <p>{following}</p>
    </>
  );
}
