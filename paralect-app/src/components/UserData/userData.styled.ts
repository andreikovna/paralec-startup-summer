import styled from 'styled-components';

import { BACKGROUND_COLOR } from '../../appConstants/constants';

export const DivData = styled.div`
  width: 100%;
  flex-grow: 3;
  display: flex;
  gap: 84px;
  justify-content: center;
  padding: 28px 20px;
  background-color: ${BACKGROUND_COLOR};
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
    padding: 10px 20px;
  }
`;
