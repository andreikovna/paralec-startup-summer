import React from 'react';

import { useAppSelector } from '../../redux/store';
import { InitialState } from '../../components/InitialState/InitialState';
import { UserData } from '../../components/UserData/UserData';
import { UserNotFound } from '../../components/UserNotFound/UserNotFound';

export function MainPage() {
  const { statusLoaded, error } = useAppSelector((state) => state.userReducer);

  return <>{error ? <UserNotFound /> : statusLoaded ? <UserData /> : <InitialState />}</>;
}
