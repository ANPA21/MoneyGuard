import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserNav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button variant="outlined" type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
