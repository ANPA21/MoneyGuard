import styled from 'styled-components';

export const BalanceStyled = styled.div`
  width: 280px;
  height: 80px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  border-radius: 8px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 0;
    width: 480px;
    backdrop-filter: none;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Text = styled.div`
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 12px;
  margin-left: 32px;
  font-size: 12px;
  color: var(--white);

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

 
`;
