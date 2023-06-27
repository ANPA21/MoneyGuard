import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserNav } from 'components/UserNav/UserNav';
import { NavBarStyled } from './NavBar.styled';
import { useAuth } from 'hooks/useAuth';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBarStyled>
      <Navigation />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </NavBarStyled>
  );
};
