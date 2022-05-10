import styled from 'styled-components';

import logo from '../../assets/GH_logo.svg';

export const DivHeader = styled.div`
  height: 72px;
  background: #0064eb;
  display: flex;
  align-items: center;
  z-index: 100;
`;

export const DivLogo = styled.div`
  width: 41px;
  height: 40px;
  margin-left: 3%;
  margin-right: 1.6%;
  background-image: url(${logo});
`;
