import { useSelector } from 'react-redux';
import {
  getUsername,
  getIsLoggedIn,
  getIsFetchingCurrent,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsFetchingCurrent);
  const user = useSelector(getUsername);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
