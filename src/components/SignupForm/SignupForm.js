import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { EMAIL_REGX } from 'components/utils/global';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Name too Short!')
    .max(20, 'Name too Long!')
    .required('Required'),
  email: Yup.string()
    .matches(EMAIL_REGX, 'Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Password too short!')
    .max(16, 'Password too long!')
    .required('Required'),
});
export const SignupForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <Form>
        <label>
          Username
          <Field type="text" name="username" />
          <ErrorMessage component="span" name="username" />
        </label>
        <label>
          Email
          <Field type="tel" name="email" />
          <ErrorMessage component="span" name="email" />
        </label>
        <label>
          Password
          <Field type="tel" name="password" />
          <ErrorMessage component="span" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
