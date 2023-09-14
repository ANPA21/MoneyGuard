import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
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

  padding: 16px 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 28px;
    margin-bottom: 0;
  }
`;
export const HeadText = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Body = styled.div`
  margin-bottom: 16px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const Footer = styled.div`
  font-weight: bold;
  .income {
    color: var(--yellow);
  }

  .expenses {
    color: var(--dashboard-text);
  }
`;
export const Expenses = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 28px;
  }
`;
export const Income = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 28px;
  }
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
  padding: 16px 16px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
    padding: 16px 28px;
  }
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
