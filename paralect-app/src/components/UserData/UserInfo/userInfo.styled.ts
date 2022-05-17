import styled from 'styled-components';

import followings from '../../../assets/svg/following.svg';
import followers from '../../../assets/svg/followers.svg';

export const DivUser = styled.aside`
  padding-top: 12px;
  max-width: 292px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 23%;
  }
  @media screen and (max-width: 900px) {
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }
`;

export const ImgUser = styled.img`
  width: 100%;
  max-width: 281px;
  border-radius: 50%;
  @media screen and (max-width: 420px) {
    width: 70%;
  }
`;

export const WrapperFollowersInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 16px;
    margin-top: 10px;
  }
  @media screen and (max-width: 420px) {
    justify-content: space-around;
    font-size: 14px;
  }
`;

export const NameParagraph = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 130%;
  margin-top: 28px;
  @media screen and (max-width: 420px) {
    font-size: 22px;
    margin-top: 15px;
  }
`;

export const LinkUser = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #0064eb;
  margin-top: 12px;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ImgFollowers = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${followers});
  @media screen and (max-width: 1024px) {
    width: 16px;
    height: 16px;
  }
`;

export const ImgFollowing = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${followings});
  @media screen and (max-width: 1024px) {
    width: 16px;
    height: 16px;
  }
`;

export const FollowersWrappers = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
`;
