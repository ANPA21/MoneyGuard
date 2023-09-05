import LoginForm from 'components/LoginForm/LoginForm';
import { ContentContainer, MainContainer } from 'components/RegisterForm/RegisterForm.styled';


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
