import { LoginForm } from 'components/LoginForm/loginform';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}
