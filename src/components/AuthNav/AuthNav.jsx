import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  rreturn(
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
