import React from 'react';
import { InputSearch } from './searchStyles';

export function Search() {
  return (
    <InputSearch type="search" autoComplete="off" autoFocus placeholder="Enter GitHub username" />
  );
}
