import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const UserNavStyled = styled('div')`
  display: flex;
  gap: 10px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 479px) {
    margin-top: 10px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-direction: row;
    /* gap: 20px; */
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
    max-width: 1400px;
  }
`;

export const LogoutBtn = styled(Button)`
  width: 70vw;
  max-width: 300px;
  @media screen and (max-width: 479px) {
    width: 70vw;
    max-width: 300px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }

  ${({ theme }) => `
background-color : ${theme.palette.buttons.bg};
color: ${theme.palette.buttons.text};
`}
`;

export const UserTextWrapper = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36.5px;
  width: calc(70vw - 2px);
  max-width: 300px;

  border-radius: 4px;
  border: 1px solid rgba(0, 150, 136, 0.5);
  @media screen and (max-width: 479px) {
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: calc(73vw + 1.4px);
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }

  ${({ theme }) => `
background-color : ${theme.palette.buttons.bg}
`};
`;

export const UserText = styled(`span`)`
  padding: 5px;
  ${({ theme }) => `
color: ${theme.palette.buttons.text};
`}
`;
