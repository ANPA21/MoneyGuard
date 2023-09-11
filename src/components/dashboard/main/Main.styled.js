import styled from 'styled-components';

export const MainStyled = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;

  //  .infoSpace {
  //    display: flex;
  //
  //  }
  //.page{
  //  //flex: 0 0 auto;
  //  flex-grow: 1;
  //}

  @media screen and (max-width: 767px) {
    //max-width: 100%;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //max-width: 100%;
    flex-direction: column;
  }
  @media screen and (min-width: 1024px) {
    //max-width: 1400px;
  }
`;
