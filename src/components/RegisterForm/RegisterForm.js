import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  CustomButton,
  CustomNavLink,
} from 'components/CustomElements/CustomForm';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Logotip from '../../images/logo.svg';
import {
  CenterElement,
  LogotipStyled,
} from 'components/LoginForm/LoginForm.styled';
import { toast } from 'react-toastify';
import PasswordStrengthBar from 'react-password-strength-bar';
import { TextField } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(12, 'Must be 12 characters or less')
      .required('Required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password mismatch')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
    toast.success(`Welcome to Money Guard, ${values.name}!!!`);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {formik => (
        <CenterElement>
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
          </CenterElement>
          <CenterElement>
            <Field
              as={TextField}
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              error={Boolean(formik.errors.name)}
              helperText={formik.errors.name && 'Please enter your name'}
            />
            <Field
              as={TextField}
              name="email"
              type="email"
              placeholder="E-mail"
              autoComplete="off"
              onChange={formik.handleChange}
              error={Boolean(formik.errors.email)}
              helperText={
                formik.errors.email && 'Please enter a valid email address'
              }
            />
            <Field
              as={TextField}
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={formik.handleChange}
              error={Boolean(formik.errors.password)}
              helperText={
                formik.errors.password &&
                'Password must contain one uppercase letter, one lowercase letter, one number'
              }
            />
            <Field
              as={TextField}
              name="passwordConfirm"
              type="password"
              placeholder="Confirm password"
              autoComplete="off"
              onChange={formik.handleChange}
              error={Boolean(formik.errors.passwordConfirm)}
              helperText={
                formik.errors.passwordConfirm &&
                'Please enter your valid password'
              }
            />
            <PasswordStrengthBar
              password={formik.values.password}
              minLength={6}
              maxLength={12}
            />
            {formik.values.password !== formik.values.passwordConfirm && (
              <span style={{ color: 'red' }}>Passwords do not match!</span>
            )}
            <CustomButton type="submit">Register</CustomButton>
            <CustomNavLink to="/login">
              <CustomButton>Log in</CustomButton>
            </CustomNavLink>
          </CenterElement>
        </CenterElement>
      )}
    </Formik>
  );
};

export default RegisterForm;
