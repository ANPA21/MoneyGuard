import { styled } from '@mui/material';

export const FooterSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding: 15px;
  ${({ theme }) => `
  
  background-color: ${theme.palette.primary.dark}`};
`;

export const FooterText = styled('span')`
  font-weight: 500;
  ${({ theme }) => `
  color: ${theme.palette.text.main}
  `}
`;

export const FooterList = styled('ul')`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 10px;
  line-height: 1;
`;
