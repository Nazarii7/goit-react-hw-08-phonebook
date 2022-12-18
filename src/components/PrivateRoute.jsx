import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';
import redirect from 'react-router';

export const PrivatedRoute = ({ component: Component, redirect = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirect} /> : <Component />;
};
