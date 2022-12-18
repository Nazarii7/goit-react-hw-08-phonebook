import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import css from './login.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label>
        Email
        <input
          type="email"
          name="email"
          autoComplete="off"
          className={css.input}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button}>
        Log In
      </button>
    </form>
  );
};
