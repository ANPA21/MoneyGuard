import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(74, 86, 226, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
`;

export const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 15px;
  }
`;

export const Row = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 16px;

  &:first-child {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: 600;
    padding: 12px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      font-family: Circe;
      padding: 12px 20px;
    }

    @media screen and (min-width: 1280px) {
      padding: 16px;
    }
  }

  &:not(:first-child) {
    font-weight: 400;
    background: rgba(74, 86, 226, 0.1);
    padding: 24px 16px 0 16px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      font-family: Circe;
      padding: 10px 20px 0 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    height: 48px;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    height: 56px;
  }
`;

export const CellHead = styled.div`
  display: table-cell;
  text-align: center;
  color: var(--white);

  &:first-child {
    margin-right: 48px;
  }

  &:last-child {
    margin-left: 50px;
  }
`;

export const Cell = styled.div`
  display: table-cell;
  text-align: center;
  color: var(--white);

  &:first-child {
    margin-right: 88px;
  }
  &:last-child {
    margin-left: 74px;
  }
`;

export const Graph = styled.div`
  position: relative;
  background: rgba(74, 86, 226, 0.1);

  img {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 36px;
  }
`;

export const Ball = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 48px;
    left: 46px;
    color: rgba(255, 134, 141, 1);
  }
`;

export const BallEur = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 14px;
    right: 94px;
    color: rgba(255, 134, 141, 1);
  }
`;
