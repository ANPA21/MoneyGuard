import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Button as ButtonLink } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <ButtonLink variant="outlined" component={NavLink} to="/">
        Home
      </ButtonLink>
      {isLoggedIn && (
        <ButtonLink variant="outlined" component={NavLink} to="/contacts">
          My Contacts
        </ButtonLink>
      )}
    </nav>
  );
};
