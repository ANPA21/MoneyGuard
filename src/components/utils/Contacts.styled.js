import { styled } from '@mui/material';

export const Wrapper = styled(`section`)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  @media screen and (max-width: 479px) {
    min-height: calc(100vh - 317px);
    margin-top: 15px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;
