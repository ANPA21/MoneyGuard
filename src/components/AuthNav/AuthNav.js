import { NavLink } from 'react-router-dom';
import { Button as ButtonLink } from '@mui/material';

export const AuthNav = () => {
  return (
    <nav>
      <ButtonLink variant="outlined" component={NavLink} to="/register">
        Register
      </ButtonLink>
      <ButtonLink variant="outlined" component={NavLink} to="/login">
        Log in
      </ButtonLink>
    </nav>
  );
};
