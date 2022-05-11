import React from 'react';

import { Search } from './Search/Search';
import { WrapperHeader, ContentHeader, DivLogo } from './header.styled';

export function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        <DivLogo />
        <Search />
      </ContentHeader>
    </WrapperHeader>
  );
}
