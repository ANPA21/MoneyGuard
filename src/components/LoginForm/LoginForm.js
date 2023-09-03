import {
  CustomButton,
  CustomNavLink,
} from 'components/CustomElements/CustomForm';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { Field, Formik } from 'formik';
import Logotip from '../../images/logo.svg';
import { CenterElement, LogotipStyled } from './LoginForm.styled';
import { toast } from 'react-toastify';
import { TextField } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(12, 'Must be 12 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
    toast.success(`You have successfully logged in.`);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {formik => (
        <CenterElement>
          <LogotipStyled>
            <img
              src={Logotip}
              alt="Logo MoneyGuard"
              width="36px"
              height="36px"
            />
            <h3>MoneyGuard</h3>
          </LogotipStyled>
          <Field
            as={TextField}
            placeholder="E-mail"
            name="email"
            type="email"
            autoComplete="off"
            onChange={formik.handleChange}
            error={Boolean(formik.errors.email)}
            helperText={
              formik.errors.email && 'Please enter your email address'
            }
          />
          <Field
            as={TextField}
            placeholder="Password"
            name="password"
            type="password"
            autoComplete="off"
            onChange={formik.handleChange}
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password && 'Please enter your password'}
          />
          <CustomButton type="submit">Log In</CustomButton>
          <CustomNavLink to="/register">
            <CustomButton>Rgister</CustomButton>
          </CustomNavLink>
        </CenterElement>
      )}
    </Formik>
  );
};

export default LoginForm;
