import styled from 'styled-components';

export const MainStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-grow: 1;
  max-width: 320px;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: column;
    max-width: 769px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    flex-direction: row;
  }
`;
