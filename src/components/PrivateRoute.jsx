import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import redirect from 'react-router';
import RedirectFunction from 'react-router';
import authSelectors from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <redirect to="/login" />}
    </Route>
  );
};
