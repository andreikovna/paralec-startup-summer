import React from 'react';

import { Search } from './Search/Search';
import { DivHeader, DivLogo } from './header.styled';

export function Header() {
  return (
    <DivHeader>
      <DivLogo />
      <Search />
    </DivHeader>
  );
}
