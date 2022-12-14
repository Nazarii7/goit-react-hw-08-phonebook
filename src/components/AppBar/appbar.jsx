import { Navigation } from 'components/Navigation/navigation';
import { UserMenu } from 'components/UserMenu/usermenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
