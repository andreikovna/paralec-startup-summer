import React from 'react';
import { ContentDiv, Div, DivImageSearch } from './initialStateStyles';

export function InitialState() {
  return (
    <>
      <Div>
        <ContentDiv>
          <DivImageSearch />
          <p>
            Start with searching <br /> a GitHub user
          </p>
        </ContentDiv>
      </Div>
    </>
  );
}
