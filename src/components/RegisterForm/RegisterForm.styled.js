import styled from 'styled-components';
import backLogIn from '../../images/backLogIn1x.jpg';
import backRegister from '../../images/backRegister1x.jpg';

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
`;

export const ContentContainer = styled.div`
  width: 400px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
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
`;
