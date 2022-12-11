import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';

const HomePage = lazy(() => import('../pages/home'));
const RegisterPage = lazy(() => import('../pages/register'));
const LoginPage = lazy(() => import('../pages/login'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<></>}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={null} />
        <Route path="/login" element={null} />
        <Route path="/contacts" element={null} />
      </Route>
    </Routes>
  );
};
