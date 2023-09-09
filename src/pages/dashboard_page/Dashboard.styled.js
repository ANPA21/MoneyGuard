import styled from 'styled-components';
import bg from '../../images/Gradient.png';

export const DashboardStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(29, 24, 48, 1);
  color: white;
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
    max-width: 1400px;
  }
`;
