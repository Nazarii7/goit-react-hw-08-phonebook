import { Link } from 'react-router-dom';
import css from './authnav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.linkAuth}>
      <Link to="/register" className={css.registerAuth}>
        Register
      </Link>
      <Link to="/login" className={css.loginAuth}>
        Log In
      </Link>
    </div>
  );
};
