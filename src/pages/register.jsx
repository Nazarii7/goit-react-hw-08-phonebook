import { RegisterForm } from 'components/RegisterForm/registerform';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
}
