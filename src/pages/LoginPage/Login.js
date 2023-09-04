import LoginForm from 'components/LoginForm/LoginForm';
import { ContentContainer, MainContainer } from './Login.styled';

const Login = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <LoginForm />
      </ContentContainer>
    </MainContainer>
  );
};

export default Login;
