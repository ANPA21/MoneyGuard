import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

const buttonStyles = css`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomButtonBase = styled(Button)`
  && {
    ${buttonStyles}
    color: white;
    background: var(
      --button-gradient,
      linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
    );
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

    &:hover {
      color: #3a2f43;
    }
  }
`;

const CustomNavLinkBtnBase = styled(NavLink)`
  && {
    ${buttonStyles}
    background-color: #ffffff;
    color: #623f8b;
  }
`;

export const CustomButton = ({ isNavLink, customStyles, ...props }) => {
  const StyledComponent = isNavLink ? CustomNavLinkBtnBase : CustomButtonBase;
  return <StyledComponent {...props} />;
};
