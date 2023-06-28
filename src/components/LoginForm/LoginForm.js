import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { EMAIL_REGX } from 'components/utils/global';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FieldStyled,
  FormStyled,
  LabelStyled,
  LogInBtn,
} from './LoginFor.styled';
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGX, 'Invalid email format!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Password too short!')
    .max(16, 'Password too long!')
    .required('Required'),
});
export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <FormStyled>
        <LabelStyled>
          <FieldStyled type="email" name="email" placeholder="Email adress" />
          <ErrorMessage render={msg => <div>{msg}</div>} name="email" />
        </LabelStyled>
        <LabelStyled>
          <FieldStyled type="password" name="password" placeholder="Password" />
          <ErrorMessage component="span" name="password" />
        </LabelStyled>
        <LogInBtn color="buttons" variant="outlined" type="submit">
          Log In
        </LogInBtn>
      </FormStyled>
    </Formik>
  );
};
