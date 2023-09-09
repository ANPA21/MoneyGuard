import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 395px;
  border-spacing: 16px 28px;
`;

export const ColorBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${props => props.color};
  border-radius: 2px;

  margin-right: 16px;
`;

export const StyledTdCat = styled.td`
  display: flex;
  align-items: center;
`;

export const StyledTdSum = styled.td`
  text-align: end;
`;

export const StyledTr = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background-color: teal;
`;
export const StyledThCat = styled.th`
  text-align: start;
`;
export const RowText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledThSum = styled.th`
  text-align: end;
`;

export const StyledTdTotal = styled.td`
  text-align: end;
`;
