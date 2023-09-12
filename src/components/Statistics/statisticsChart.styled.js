import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

export const Balance = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--dashboard-text);

  font-size: 18px;
  font-weight: 600;
`;

export const DonutContainer = styled.div`
  max-width: 100%;
  /* width: auto; */
  /* height: auto; */
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1267px) {
    margin-top: 20px;
    //max-width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const DoughnutSt = styled(Doughnut)``;
