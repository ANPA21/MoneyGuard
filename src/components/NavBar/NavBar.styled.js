// import styled from 'styled-components';

import { styled } from '@mui/material';

export const NavBarStyled = styled(`div`)`
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 15px;
  ${({ theme }) => `
  background-color : ${theme.palette.primary.dark}
  `};

  @media screen and (max-width: 479px) {
    max-width: 100%;
    display: block;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 100%;
    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1400px;
  }
`;
