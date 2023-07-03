import { SignupForm } from 'components/SignupForm/SignupForm';
import {
  RegisterPage,
  RegisterPageText,
} from 'components/utils/Register.styled';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <RegisterPage>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <RegisterPageText>Sign up, and get your contacts!</RegisterPageText>
      <SignupForm />
    </RegisterPage>
  );
};
export default Register;
