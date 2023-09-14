import styled from 'styled-components';

export const BalanceStyled = styled.div`
  height: 80px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 100%;
  margin-top: 12px;
  max-width: 280px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    min-width: 336px;
    margin: 28px 32px 0;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 0;
    max-width: 479px;
    margin: 28px 0 32px 0;
    backdrop-filter: none;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Text = styled.div`
  text-transform: uppercase;
  padding-top: 8px;
  margin-bottom: 12px;
  margin-left: 32px;
  font-size: 12px;
  color: var(--transp-40);

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 56px;
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
`;

export const Symbol = styled.div`
  font-size: 30px;
  color: var(--white);
  margin-left: 32px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 40px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 56px;
  }
`;

export const Total = styled.div`
  font-size: 30px;
  color: var(--white);
  margin-left: 10px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 240px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 12px;
  }
`;
