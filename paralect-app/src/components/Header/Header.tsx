import React from 'react';
import { Search } from './Search/Search';
import { DivHeader } from './headerStyles';
import { Logo } from './Logo/Logo';

export function Header() {
  return (
    <DivHeader>
      <Logo />
      <Search />
    </DivHeader>
  );
}
