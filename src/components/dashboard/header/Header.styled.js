import styled from 'styled-components';
import { IoExitOutline } from 'react-icons/io5';

export const HeaderContainer = styled.header`
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
`;
export const Div = styled.div`
  max-width: 320px;
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const HeaderDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  max-width: 1280px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 20px;
    height: 60px;
  }

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.5px) {
    padding: 0 32px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const LogoBox = styled.button`
  padding: 16px 16px 16px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  transition: all 400ms;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    padding: 12px 0;
    margin-right: auto;
  }
`;

export const Logo = styled.img`
  width: 17px;
  height: 21px;
  margin-bottom: 3px;
`;

export const LogoName = styled.span`
  color: #fbfbfb;
  font-size: 12px;
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    margin-left: auto;
  }
`;

export const Name = styled.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  font-size: 16px;
  margin: 0;
  margin-right: 12px;

  @media (max-width: 767px) {
    margin-right: 8px;
  }
`;

export const Stick = styled.div`
  height: 30px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.6);
  margin-right: 12px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 100%;
  transition: all 400ms;
  padding: 0;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 767px) {
    padding: 28px 0;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const ExitOutline = styled(IoExitOutline)`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.6);

  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`;

export const ExitText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  @media (max-width: 767px) {
    display: none;
  }
`;
