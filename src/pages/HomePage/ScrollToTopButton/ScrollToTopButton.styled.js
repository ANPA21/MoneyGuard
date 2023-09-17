import styled from 'styled-components';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const ScrollButton = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: 1.5px solid #bfaed3;
  color: #bfaed3;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;

  line-height: 40px;
  font-size: 24px;
  cursor: pointer;
  z-index: 999;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #734aef;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const UpArrow = styled(AiOutlineArrowUp)``;
