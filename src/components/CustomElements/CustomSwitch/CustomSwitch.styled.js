import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  background-color: var(--white);
  border-radius: 30px;
  cursor: pointer;
`;

export const Text = styled.span`
  position: absolute;
  right: 100px;
  font-weight: 600;
  color: ${({ checked }) =>
    checked ? 'rgba(255, 255, 255, 0.60)' : 'var(--yellow)'};
`;

export const TextExpense = styled(Text)`
  left: 100px;
  color: ${({ checked }) =>
    checked ? '#FF868D' : 'rgba(255, 255, 255, 0.60)'};
`;

export const Slider = styled.div`
  position: absolute;
  top: 50%;
  transform: ${({ checked }) =>
    `translateY(-50%) translateX(${checked ? '40px' : '0'})`};
  width: 44px;
  height: 44px;
  background-color: ${({ checked }) => (checked ? '#FF868D' : 'var(--yellow)')};
  box-shadow: ${({ checked }) =>
    checked
      ? '0px 6px 15px 0px rgba(255, 134, 141, 0.50)'
      : '0px 6px 15px 0px rgba(255, 199, 39, 0.50)'};
  border-radius: 50%;
  transition: 0.3s;
  margin-left: ${({ checked }) => (checked ? '0' : '-4px')};
`;

export const Plus = styled.div`
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: var(--white);
  top: 50%;
  left: 50%;
  transform: ${({ checked }) =>
    `translate(-50%, -50%) rotate(${checked ? '0deg' : '90deg'})`};
  transition: 0.3s;
`;

export const Minus = styled.div`
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: var(--white);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: 0.3s;
`;
