import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Link to="/" className={css.homeAuth}>
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" className={css.contactsAuth}>
          Contacts
        </Link>
      )}
    </nav>
  );
};
