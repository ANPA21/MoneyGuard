import styled from 'styled-components';

export const DynamicSidebarStyled = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid rgba(251, 251, 251, 0.83);

  max-width: 320px;
  width: 100%;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 214px;
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 480px;
  }
`;
