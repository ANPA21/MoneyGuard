import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 479px) {
    gap: 10px;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
