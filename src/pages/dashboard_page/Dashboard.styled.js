import styled from 'styled-components';

export const DashboardStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
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
