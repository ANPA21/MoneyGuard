import { styled } from '@mui/material';
export const HomePageSection = styled(`section`)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  @media screen and (max-width: 479px) {
    min-height: ${({ isLoggedIn }) =>
      isLoggedIn ? 'calc(100vh - 287px)' : 'calc(100vh - 241px)'};
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;

export const HomePageMedia = styled(`div`)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 479px) {
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;

export const HPMediaTitle = styled(`h1`)`
  text-transform: uppercase;
  font-size: 25px;
  text-align: center;
  @media screen and (max-width: 479px) {
    margin-top: 75px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;

export const HPMediaText = styled(`span`)`
  font-weight: 500;
  line-height: 1.5;
  font-size: 24px;
  @media screen and (max-width: 479px) {
    margin-top: 15px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;
