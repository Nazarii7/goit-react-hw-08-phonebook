import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
import { Layout } from './Layout/Layout';
import { PrivatedRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useAuth } from 'hooks/useAuth';
import { redirect } from 'react-router';

const HomePage = lazy(() => import('../pages/home'));
const RegisterPage = lazy(() => import('../pages/register'));
const LoginPage = lazy(() => import('../pages/login'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <div
      style={{
        width: '1000px',
        margin: '0 auto',
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'antiquewhite',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute component={RegisterPage} redirect="/contacts" />
            }
          />
          <Route
            path="/login"
            element={<PublicRoute component={LoginPage} redirect="/contacts" />}
          />
          <Route
            path="/contacts"
            element={
              <PrivatedRoute component={ContactsPage} redirect="/login" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
