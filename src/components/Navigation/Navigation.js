import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { ButtonLink, NavStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavStyled>
      <ButtonLink color="buttons" variant="outlined" component={NavLink} to="/">
        Home
      </ButtonLink>
      {isLoggedIn && (
        <ButtonLink
          color="buttons"
          variant="outlined"
          component={NavLink}
          to="/contacts"
        >
          My Contacts
        </ButtonLink>
      )}
    </NavStyled>
  );
};
