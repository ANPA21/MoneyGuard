import styled from 'styled-components';

export const DynamicSidebarStyled = styled.div`
  //flex: 0 0 auto;
  //flex-basis: 37%;
  display: flex;
  flex-direction: column;

  //background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(251, 251, 251, 0.83);

  //width: 37%;

  //flex-direction: column;
  //gap: 15px;

  //padding: 5px;
  //color: black;

  @media screen and (max-width: 767px) {
    // mobile
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    height: 336px; // Временно для верстки статистики
    max-height: 336px;
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1024px) {
    width: 480px;
    //десктоп  ???????
  }
`;
