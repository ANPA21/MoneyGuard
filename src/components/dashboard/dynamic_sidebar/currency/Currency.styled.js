import styled from 'styled-components';

export const Graph = styled.div`
  position: relative;
  background: rgba(74, 86, 226, 0.1);

  img {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 40px;
  }
`;

export const Ball = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 55px;
    left: 46px;
    color: rgba(255, 134, 141, 1);
    font-size: 12px;
  }
`;

export const BallEur = styled.span`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 20px;
    right: 94px;
    color: rgba(255, 134, 141, 1);
    font-size: 12px;
  }
`;

export const Wrap = styled.div`
  background: rgba(74, 86, 226, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  width: 320px;
  margin-top: 24px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    margin-top: 0px;
  }

  @media screen and (min-width: 1280px) {
    width: 480px;
    margin-top: 0px;
  }
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-radius: 0px, 0px, 8px, 8px;
  color: var(--white);
  background: rgba(74, 86, 226, 0.1);

  @media screen and (min-width: 1280px) {
    width: 480px;
    border-radius: 0;
  }

  th,
  td {
    text-align: center;
    line-height: 1.5;
  }

  th {
    font-weight: 600;
    line-height: 1.5;
    padding: 12px;

    @media screen and (min-width: 1280px) {
      padding: 16px;
    }
  }

  thead th:nth-child(1) {
    width: 33%;
    padding-left: 20px;
    text-align: left;

    @media screen and (min-width: 1280px) {
      padding-left: 62px;
    }
  }

  thead th:nth-child(2) {
    width: 34%;
  }

  thead th:nth-child(3) {
    width: 33%;
    padding-right: 20px;
    text-align: right;

    @media screen and (min-width: 1280px) {
      padding-right: 130px;
    }
  }

  td {
    padding: 8px 8px 4px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      font-family: Circe;
    }

    @media screen and (min-width: 1280px) {
      padding: 24px 8px 0px;
    }
  }

  tbody td:nth-child(1) {
    padding-left: 20px;
    text-align: left;

    @media screen and (min-width: 1280px) {
      padding-left: 84px;
    }
  }

  tbody td:nth-child(3) {
    padding-right: 20px;
    text-align: right;

    @media screen and (min-width: 1280px) {
      padding-right: 130px;
    }
  }
  tbody tr:nth-child(2) {
    td {
      padding-bottom: 0px;
    }
  }

  thead {
    background: rgba(255, 255, 255, 0.2);
  }
`;
