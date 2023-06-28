import styled from 'styled-components';

export const LayoutStyled = styled.div`
  margin: 0 auto;
  background-color: #dff4ee;

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
