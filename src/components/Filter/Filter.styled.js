import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

export const Wrapper = styled(`div`)`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 15px;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 479px) {
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

export const SearchIconSt = styled(SearchIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 5.5px auto 0;
`;

export const InputWrapper = styled(`div`)`
  position: relative;
`;

export const FilterInput = styled(`input`)`
  min-height: 35px;
  min-width: 200px;

  padding: 5px 30.5px 5px 5px;

  ${({ theme }) => `
  background-color : ${theme.palette.primary.xtrlight};
  border : 1px solid ${theme.palette.primary.dark};
  `}
  border-radius: 4px;
`;
