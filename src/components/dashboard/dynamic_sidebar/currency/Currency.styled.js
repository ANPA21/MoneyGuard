import styled from 'styled-components';

export const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
  background-color: rgba(74, 86, 226, 0.10);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;


  @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-bottom: 0;

    }
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

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      padding: 20px 2px 20px 0;
    }
  }

  &:not(:first-child) {
    font-weight: 400;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      justify-content: space-between;
      font-family: Circe;
      height: 0;
      padding: 20px 0 7px 0;

    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    height: 46px;
    padding: 0;

    &:last-child {
    padding-bottom: 0;
  }
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    height: 56px;
  }
`;

export const Cell = styled.div`
  display: table-cell;
  padding: 8px;
  text-align: center;
  color: var(--white);

@media screen and (min-width: 768px) and (max-width: 1279px) {
  padding: 12px 20px;
   
  }

`;

export const Graph = styled.div``;
