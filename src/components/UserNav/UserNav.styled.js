import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const UserNavStyled = styled('div')`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 479px) {
    margin-top: 10px;
    flex-direction: column;
    align-items: stretch;
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
  ${({ theme }) => `
background-color : ${theme.palette.buttons.bg}
`}
`;

export const UserTextWrapper = styled(`div`)`
  display: flex;
  height: 36.5px;
  align-items: center;
  justify-content: center;
  background-color: #00695c;
  border: 1px solid rgba(178, 223, 219, 0.5);
  border-radius: 4px;
`;
export const UserText = styled(`span`)`
  padding: 5px;
  color: #b2dfdb;
`;
