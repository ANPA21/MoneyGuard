import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserNav } from 'components/UserNav/UserNav';
import { NavBarStyled } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Navigation />
      <AuthNav />
      <UserNav />
    </NavBarStyled>
  );
};
