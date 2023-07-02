import { styled } from '@mui/material';

export const Wrapper = styled(`section`)`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  min-height: calc(100vh - 317px);
  margin-top: 15px;
  @media screen and (max-width: 479px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    min-height: calc(100vh - 244px);
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    min-height: calc(100vh - 234px);
  }
  @media screen and (min-width: 1024px) {
    min-height: calc(100vh - 234px);
  }
`;
