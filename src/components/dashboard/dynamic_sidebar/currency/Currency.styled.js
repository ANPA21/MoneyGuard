import styled from 'styled-components';

export const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  &:first-child {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: 600;
  }

  &:not(:first-child) {
    font-weight: 400;
    background: rgba(74, 86, 226, 0.1);

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-family: Circe;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 336px;
    height: 48px;
  }

  @media screen and (min-width: 1024px) {
    width: 480px;
    height: 56px;
  }
`;

export const Cell = styled.div`
  display: table-cell;
  padding: 8px;
  text-align: center;
  color: var(--white);
`;

export const Graph = styled.div``;
