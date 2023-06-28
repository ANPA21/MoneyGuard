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
   border: 1px solid ${theme.palette.secondary.main}
  `}
`;

export const ButtonStyled = styled(Button)`
  padding: 5px;
  border-radius: 8px;
`;
