import React from 'react';
import { useAppSelector } from '../../redux/store';
import { InitialState } from '../../components/InitialState/InitialState';
import { UserData } from '../../components/UserData/UserData';

export function MainPage() {
  const { statusLoading } = useAppSelector((state) => state);

  return <>{statusLoading ? <UserData /> : <InitialState />}</>;
}
