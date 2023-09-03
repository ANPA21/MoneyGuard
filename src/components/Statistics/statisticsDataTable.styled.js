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
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledTdSum = styled.td`
  text-align: end;
`;

export const StyledTr = styled.tr``;
export const StyledThCat = styled.th`
  text-align: start;
`;

export const StyledThSum = styled.th`
  text-align: end;
`;

export const StyledTdTotal = styled.td`
  text-align: end;
`;
