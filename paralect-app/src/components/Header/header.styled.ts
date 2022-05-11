import styled from 'styled-components';

import logo from '../../assets/GH_logo.svg';

export const WrapperHeader = styled.div`
  height: 72px;
  background: #0064eb;
  z-index: 100;
`;

export const ContentHeader = styled.div`
  max-width: 1366px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const DivLogo = styled.div`
  width: 41px;
  height: 40px;
  margin-left: 3%;
  margin-right: 1.6%;
  background-image: url(${logo});
`;
