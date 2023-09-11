import styled from 'styled-components';

export const DynamicSidebarStyled = styled.div`
    //flex: 0 0 auto;
    //flex-basis: 37%;
    width: 37%;
    display: flex;
    flex-direction: column;

    //background-color: rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(251, 251, 251, 0.83);

    //width: 37%;
    
    //flex-direction: column;
    //gap: 15px;
    

    //padding: 5px;
    //color: black;

  @media screen and (max-width: 479px) {
    //мобилка   (до 479px)  ?????  
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    //планшет  ???????
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //планшет ??????
  }
  @media screen and (min-width: 1024px) {
    //десктоп  ???????
  }

`;