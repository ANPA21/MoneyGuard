import styled from 'styled-components';

export const WorkingSpaceStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid teal;
  //background: linear-gradient(220deg, rgb(11, 6, 38) 44%, rgb(34 14 59) 82%);

  //width: -webkit-fill-available;
  //display: flex;
  //flex-direction: column;
  //gap: 15px;
  //background-color: bisque;
  //padding: 5px;
  //color: #fff;

  @media screen and (max-width: 479px) {
    //max-width: 100%;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    //max-width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    //max-width: 1400px;
  }
`;
