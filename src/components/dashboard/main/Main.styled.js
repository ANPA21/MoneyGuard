import styled from 'styled-components';

export const MainStyled = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
    }
    @media screen and (min-width: 1024px) {
      flex-grow: 1;
    }
`;