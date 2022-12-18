import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';
import css from './register.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label>
        Name
        <input type="text" name="name" className={css.input} />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          autoComplete="username"
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
        Register
      </button>
    </form>
  );
};
