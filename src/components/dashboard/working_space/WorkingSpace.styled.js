import styled from 'styled-components';

export const WorkingSpaceStyled = styled.div`
    display: flex;
    flex-direction: column;
    
  @media screen and (max-width: 767px) {
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    align-items: end;
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }

`;