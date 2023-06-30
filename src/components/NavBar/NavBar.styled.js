// import styled from 'styled-components';

import { styled } from '@mui/material';

export const NavBarStyled = styled(`div`)`
  display: flex;
  gap: 10px;
  max-width: 100%;
  padding: 20px;

  justify-content: space-between;
  align-items: center;
  ${({ theme }) => `
  background-color : ${theme.palette.primary.dark}
  `};

  @media screen and (max-width: 479px) {
    display: block;
    padding: 15px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
    max-width: 1400px;
  }
`;
