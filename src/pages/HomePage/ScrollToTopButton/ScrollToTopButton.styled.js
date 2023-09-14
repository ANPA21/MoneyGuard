import styled from 'styled-components';

export const ScrollButton = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: 1px solid #bfaed3;
  color: #bfaed3;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  cursor: pointer;
  z-index: 999;

  &:hover {
    background-color: #734aef;
  }
`;

