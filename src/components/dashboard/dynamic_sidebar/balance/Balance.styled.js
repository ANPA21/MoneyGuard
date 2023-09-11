import styled from 'styled-components';

export const BalanceStyled = styled.div`
  height: 80px;
  padding-top: 8px;
  padding-bottom: 11px;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
  background: rgba(82, 59, 126, 0.60);
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.20);
  

  h3 {
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.40);
  }
  
  p {
    font-size: 30px;
    font-weight: 700;
    color: rgb(251, 251, 251);
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    padding-left: 38px;
    border-radius: 8px;
    margin-top: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 336px;
    padding-left: 40px;
    border-radius: 8px;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    padding-left: 56px;
  }

`;

