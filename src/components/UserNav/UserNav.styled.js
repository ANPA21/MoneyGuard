import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const UserNavStyled = styled('div')`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 479px) {
    margin-top: 10px;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1400px;
  }
`;

export const LogoutBtn = styled(Button)`
  width: 70vw;
  max-width: 300px;
  ${({ theme }) => `
background-color : ${theme.palette.buttons.bg};
color: ${theme.palette.buttons.text};
`}
`;

export const UserTextWrapper = styled(`div`)`
  display: flex;
  height: 36.5px;
  width: 70vw;
  max-width: 300px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `
background-color : ${theme.palette.buttons.bg}
`};
  border-radius: 4px;
`;
export const UserText = styled(`span`)`
  padding: 5px;
  color: #b2dfdb;
`;
