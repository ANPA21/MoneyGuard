import styled from 'styled-components';
//import bg from '../../images/Gradient.png';

export const DashboardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: 
    radial-gradient(circle at 9% 90%, rgba(55, 15, 99, .7) 4%, rgba(20, 5, 89, .03) 26%),
    radial-gradient(circle at 6% 18%, rgba(55, 15, 99, .8) 3%, rgba(7, 0, 42, .4) 14%),
    linear-gradient(190deg, rgba(67, 4, 91, .9) 10%, rgba(9, 0, 49, .2) 26%),
    radial-gradient(circle at 75% 99%, rgba(140, 15, 95, .99) 15%, rgba(9, 0, 49, .99) 41%);
  //margin: 0 auto;

  @media screen and (max-width: 479px) {
    max-width: 100%;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }
`;
