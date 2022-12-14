import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
import { AppBar } from './AppBar/appbar';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/home'));
const RegisterPage = lazy(() => import('../pages/register'));
const LoginPage = lazy(() => import('../pages/login'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchCurrentUser));
  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={RegisterPage} />
          <Route path="/login" element={LoginPage} />

          <PrivateRoute path="/contacts">
            <ContactsPage />
          </PrivateRoute>
        </Route>
      </Routes>
    </div>
  );
};
