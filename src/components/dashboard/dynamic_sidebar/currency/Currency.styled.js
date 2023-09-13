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
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 15px;
  }
`;

export const Row = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Poppins;

  &:first-child {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: 600;
    

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media screen and (min-width: 1280px) {
      padding-left: 62px;
      padding-right: 131px;

    }
  }

  &:not(:first-child) {
    font-weight: 400;
    background: rgba(74, 86, 226, 0.1);


    @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      justify-content: space-between;
      height: 0;
      padding: 20px 20px 7px 20px;
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
    padding-left: 84px;
    padding-right: 131px;
  }
`;

export const CellHead = styled.div`
  display: table-cell;
  text-align: center;
  color: var(--white);

  &:first-child {
    margin-right: 48px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  margin-right: 30px;
  }
    
  }

  &:last-child {
    margin-left: 50px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
  margin-left: 67px;
  }
  }
`;

export const Cell = styled.div`
  display: table-cell;
  text-align: center;
  padding: 8px;
  color: var(--white);
  
  &:first-child {
    margin-right: 88px;
    padding: 20px 2px 20px 0;
  }
  &:last-child {
    margin-left: 74px;

    @media screen and (min-width: 1280px) {
    margin-left: 40px;
  }
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
