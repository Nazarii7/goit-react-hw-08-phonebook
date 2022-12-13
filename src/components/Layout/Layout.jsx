import { Outlet } from 'react-router';
import { AppBar } from 'components/AppBar/appbar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
