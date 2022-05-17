import styled from 'styled-components';

export const WrapperRepo = styled.div`
  max-width: 877px;
  min-width: 550px;
  /* height: 100%; */
  min-height: 112px;
  padding: 24px 32px;
  background: #ffffff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    min-height: 90px;
    padding: 14px 22px;
  }
  @media screen and (max-width: 768px) {
    min-width: 260px;
    min-height: 80px;
    padding: 10px 10px;
  }
`;

export const NameRepoLink = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #0064eb;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and (max-width: 520px) {
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DescriptionRepo = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (max-width: 520px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
