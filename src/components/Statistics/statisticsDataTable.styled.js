import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

export const Container = styled.div`
  padding: 0px 16px 0px 16px;
  width: 395px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  padding: 16px 28px 16px 28px;
`;
export const HeadText = styled.div``;

export const Body = styled.div``;
export const Footer = styled.div``;
export const Expenses = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 28px 8px 28px;
`;
export const Income = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 28px 16px 28px;
`;

export const ColorBox = styled.div`
  display: block;
  min-width: 24px;
  min-height: 24px;
  background-color: ${props => props.color};
  border-radius: 2px;
`;

export const StyledTdCat = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTdSum = styled.div`
  text-align: end;
`;

export const StyledTr = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px 28px 16px 28px;
`;
export const StyledThCat = styled.div`
  text-align: start;
`;
export const RowText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 16px;
`;
export const StyledThSum = styled.div`
  text-align: end;
`;

export const StyledTdTotal = styled.div`
  text-align: end;
`;

export const Balance = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 18px;
  font-weight: 600;
`;

export const DonutContainer = styled.div`
  max-width: 100%;
  width: auto;
  height: auto;
  position: relative;
`;

export const DoughnutSt = styled(Doughnut)`
  max-width: 100%;
  width: auto;
  height: auto;
`;
