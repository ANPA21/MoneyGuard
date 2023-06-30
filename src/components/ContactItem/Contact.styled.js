import { styled } from '@mui/material';
import { Button } from '@mui/material';

export const ContactItemStyled = styled(`li`)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  gap: 5px;
  border-radius: 2px;
  ${({ theme }) => `
   border: 1px solid ${theme.palette.primary.dark}
  `}
`;

export const ContactTextWrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 479px) {
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;
export const ContactMainText = styled(`span`)`
  font-size: 18px;
  font-weight: 500;
`;
export const ContactSecondaryText = styled(`span`)`
  font-size: 16px;
  font-weight: normal;
`;
export const ButtonStyled = styled(Button)`
  padding: 5px;
  border-radius: 8px;
`;
