import React from 'react';
import { Search } from '../Search/Search';
import { DivHeader } from './headerStyles';

export function Header() {
  return (
    <DivHeader>
      <Search></Search>
    </DivHeader>
  );
}
