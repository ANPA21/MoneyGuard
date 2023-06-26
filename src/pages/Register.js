import { SignupForm } from 'components/SignupForm/SignupForm';
import { Helmet } from 'react-helmet';

export const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <span>REGISTER HERE</span>
      <br />
      <SignupForm />
    </div>
  );
};
