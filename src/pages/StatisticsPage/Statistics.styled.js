import styled from 'styled-components';
import { desktopStyles } from 'styles/breakpoints';
export const StatSection = styled.section`
  display: flex;
  max-width: 70%;
  /* justify-content: center; */
  margin-top: 32px;
  margin-left: 84px;

  color: var(--white);
  ${desktopStyles};

  @media (max-width: 767px) {
    margin-top: 20px;
    width: 100%;
    padding: 0 20px;
  }
`;

export const RightSideStatWrapper = styled.div`
  display: flex;
`;
export const LeftSideWrapper = styled.div``;

export const DatePickerWrapper = styled.div``;
export const DataWrapper = styled.div``;
export const TitleStyled = styled.h1`
  color: var(--white, #fbfbfb);
  text-align: start;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
