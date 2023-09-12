import styled from 'styled-components';

export const DynamicSidebarStyled = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid rgba(251, 251, 251, 0.83);

  max-width: 320px;
  width: 100%;
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    height: 336px; // Временно для верстки статистики
    max-height: 336px;
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    max-width: 480px;
  }
`;
