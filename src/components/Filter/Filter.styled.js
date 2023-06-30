import { styled } from '@mui/material';

export const Wrapper = styled(`div`)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 15px;
  @media screen and (max-width: 479px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;
export const Title = styled(`h1`)`
  margin: 0;
  font-size: 20px;
`;

export const FilterText = styled(`span`)`
  font-size: 16px;
  font-weight: 500;
`;

export const FilerInput = styled(`input`)`
  min-height: 35px;
  min-width: 200px;

  padding: 5px;

  ${({ theme }) => `
  background-color : ${theme.palette.primary.xtrlight};
  border : 1px solid ${theme.palette.primary.dark};
  `}
  border-radius: 4px;
`;
