import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
`;

export const ModalWindow = styled.div`
  width: 320px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 40px 72px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(50px);

  &::after {
    content: '';
    width: 454px;
    height: 454px;
    border-radius: 50%;
    background-color: rgba(47, 21, 176, 0.73);
    filter: blur(100px);
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 540px) {
    width: 540px;
    height: 589px;
  }
`;

export const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;
  line-height: 0;
  border: none;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 13px 68px;
  background-color: rgba(251, 251, 251, 1);
  border-radius: 20px;
  border: none;
  line-height: 1.5;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: rgba(98, 63, 139, 1);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
`;
