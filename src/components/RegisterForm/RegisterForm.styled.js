import styled from 'styled-components';
import backLogIn from '../../images/login-bg/bg-login-web.jpg';
import backRegister from '../../images/register-bg/bg-register-desktop.jpg';

import { desktopStyles } from 'styles/breakpoints';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${props => (props.isRegister ? backRegister : backLogIn)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;

  ${desktopStyles}

  @media screen and (min-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  }
`;

export const ContentContainer = styled.div`
  width: 400px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }
`;

export const LogotipStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0 auto 52px;
    color: var(--white);
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 26px;
    }
  }
`;
