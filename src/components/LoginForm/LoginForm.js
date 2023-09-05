import { CustomButton } from 'components/CustomElements/CustomButton';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from 'redux/authReducer/operations';
import { ErrorMessage, Field, Formik } from 'formik';
import Logotip from '../../images/logo.svg';
import { FormStyled, LabelStyled, LogotipStyled } from './LoginForm.styled';
import { MdEmail, MdHttps } from 'react-icons/md';
import { toast } from 'react-toastify';
import { CustomNavLinkBtn } from 'components/CustomElements/CustomNavLink';

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
          <MdEmail className="iconEmail" />
          <Field name="email" type="email" placeholder="E-mail" />
          <ErrorMessage component="span" name="email" />
        </LabelStyled>

        <LabelStyled>
          <MdHttps className="iconPass" />
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage component="span" name="password" />
        </LabelStyled>

        <CustomButton type="submit">Log In</CustomButton>

        <CustomNavLinkBtn to="/register">Register</CustomNavLinkBtn>
      </FormStyled>
    </Formik>
  );
};

export default LoginForm;
