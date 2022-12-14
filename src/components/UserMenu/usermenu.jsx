import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}></button>
    </div>
  );
};
