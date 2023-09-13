import styled from 'styled-components';

export const WorkingSpaceStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid teal;
  width: 100%;
  max-width: 320px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-left: 32px;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    max-width: 800px;
    width: 100%;
    margin-left: 69px;
    margin-right: auto;
    margin-top: 46px;
  }
`;
