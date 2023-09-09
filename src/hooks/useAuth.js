import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/authReducer/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(state => state.auth.token);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};
