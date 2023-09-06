import Logotip from '../../images/logo.svg';
import { useDispatch } from 'react-redux';
import { LogoutBtn, LogoTitle, Text } from './Logout.styled';
import { logOut } from 'redux/authReducer/operations';

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <>
      <img src={Logotip} alt="Logo MoneyGuard" width="36px" height="36px" />
      <LogoTitle>Money Guard</LogoTitle>
      <Text>Are you sure you want to log out?</Text>
      <LogoutBtn type="submit" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </>
  );
}
