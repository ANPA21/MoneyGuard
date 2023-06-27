import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserNav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcome, username</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
