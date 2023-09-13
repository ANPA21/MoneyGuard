import styled from 'styled-components';

export const DynamicSidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 214px;
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    max-width: 480px;
    align-items: unset;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`;
