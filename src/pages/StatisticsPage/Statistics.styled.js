import styled from 'styled-components';
export const StatSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  @media (max-width: 767px) {
    margin-top: 20px;
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
