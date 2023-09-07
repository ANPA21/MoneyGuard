import { CustomButton } from 'components/CustomElements/CustomButton';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { ErrorMessage, Formik } from 'formik';
import Logotip from '../../images/logo.svg';
import {
  EmailIcon,
  ErrorContainer,
  FormStyled,
  IconContainer,
  IconInInput,
  InputStyled,
  LabelStyled,
  PasswordIcon,
} from './LoginForm.styled';
import { toast } from 'react-toastify';
import { LogotipStyled } from 'components/RegisterForm/RegisterForm.styled';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .max(12, 'Must be 12 characters or less')
    .required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
    toast.success(`You have successfully logged in.`);

    console.log('Успешный вход в систему');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <LogotipStyled>
          <img src={Logotip} alt="Logo MoneyGuard" width="36px" height="36px" />
          <h3>MoneyGuard</h3>
        </LogotipStyled>

        <LabelStyled>
        <ErrorContainer>
          <IconInInput>
            <IconContainer>
              <EmailIcon />
            </IconContainer>
            <InputStyled name="email" type="email" placeholder="E-mail" />
          </IconInInput>
          <ErrorMessage component="span" name="email" />
          </ErrorContainer>
        </LabelStyled>

        <LabelStyled>
        <ErrorContainer>
          <IconInInput>
            <IconContainer>
              <PasswordIcon />
            </IconContainer>
            <InputStyled
              name="password"
              type="password"
              placeholder="Password"
            />
          </IconInInput>
          <ErrorMessage component="span" name="password" />
          </ErrorContainer>
        </LabelStyled>

        <CustomButton type="submit">Log In</CustomButton>
        <CustomButton isNavLink to="/register">
          Register
        </CustomButton>
      </FormStyled>
    </Formik>
  );
};

export default LoginForm;
