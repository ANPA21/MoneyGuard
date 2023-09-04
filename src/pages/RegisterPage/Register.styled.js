import styled from 'styled-components';
import backImage from '../../images/background.jpg';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url(${backImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
width: 400px;
padding: 20px;
flex-shrink: 0;
border-radius: 8px;
background: var(--Form-color, rgba(255, 255, 255, 0.10));
box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(50px);
`;

