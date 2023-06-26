import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <span>LOGIN PLEASE TO ACCES CONTATCS</span>
      <br />
      <LoginForm />
    </div>
  );
};
