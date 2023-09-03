import RegisterForm from 'components/RegisterForm/RegisterForm';
import { ContentContainer, MainContainer } from './Register.styled';

const Register = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <RegisterForm />
      </ContentContainer>
    </MainContainer>
  );
};

export default Register;
