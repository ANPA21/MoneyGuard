import { styled } from '@mui/material';

export const LogInPage = styled(`div`)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  align-items: center;
  @media screen and (max-width: 479px) {
    min-height: calc(100vh - 281px);
    margin-top: 25px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;
export const LogInPageText = styled(`span`)`
  font-weight: 700;
`;
