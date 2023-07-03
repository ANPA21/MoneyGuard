import { LoginForm } from 'components/LoginForm/LoginForm';
import { LogInPage, LogInPageText } from 'components/utils/Login.styled';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <LogInPage>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LogInPageText>Please login to access contacts</LogInPageText>
      <LoginForm />
    </LogInPage>
  );
};

export default Login;
