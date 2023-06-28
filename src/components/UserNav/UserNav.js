import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  LogoutBtn,
  UserNavStyled,
  UserText,
  UserTextWrapper,
} from './UserNav.styled';

export const UserNav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const { user } = useAuth();
  return (
    <UserNavStyled>
      <UserTextWrapper>
        <UserText>Welcome, {user.name}</UserText>
      </UserTextWrapper>
      <LogoutBtn
        color="buttons"
        variant="outlined"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </LogoutBtn>
    </UserNavStyled>
  );
};
