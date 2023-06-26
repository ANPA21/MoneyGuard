import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { EMAIL_REGX } from 'components/utils/global';
// import { useDispatch, useSelector } from 'react-redux';
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(EMAIL_REGX, 'Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Password too short!')
    .max(16, 'Password too long!')
    .required('Required'),
});
export const LoginForm = () => {
  // const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <Form>
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
