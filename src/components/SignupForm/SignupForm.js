import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { EMAIL_REGX } from 'components/utils/global';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name too Short!')
    .max(20, 'Name too Long!')
    .required('Required'),
  email: Yup.string()
    .matches(EMAIL_REGX, 'Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(7, 'Password too short!')
    .max(20, 'Password too long!')
    .required('Required'),
});
export const SignupForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
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
          <Field type="text" name="name" />
          <ErrorMessage component="span" name="name" />
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
