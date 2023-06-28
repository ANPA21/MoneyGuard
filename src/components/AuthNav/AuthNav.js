import { NavLink } from 'react-router-dom';
import { ButtonLink, NavStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavStyled>
      <ButtonLink
        color="buttons"
        variant="outlined"
        component={NavLink}
        to="/register"
      >
        Register
      </ButtonLink>
      <ButtonLink
        color="buttons"
        variant="outlined"
        component={NavLink}
        to="/login"
      >
        Log in
      </ButtonLink>
    </NavStyled>
  );
};
