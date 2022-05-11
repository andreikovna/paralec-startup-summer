import React from 'react';

import { ContentDiv, WrapperDiv, DivImageSearch } from './initialState.styled';

export function InitialState() {
  return (
    <WrapperDiv>
      <ContentDiv>
        <DivImageSearch />
        <p>
          Start with searching <br /> a GitHub user
        </p>
      </ContentDiv>
    </WrapperDiv>
  );
}
