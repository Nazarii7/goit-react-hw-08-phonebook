import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operation';
import { useAuth } from 'hooks/useAuth';
import css from './usermenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <span>Welcome, {user}</span>
      <button type="button" onClick={handleLogOut} className={css.buttonLogOut}>
        Log Out
      </button>
    </div>
  );
};
