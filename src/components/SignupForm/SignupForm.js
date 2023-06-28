import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { EMAIL_REGX } from 'components/utils/global';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FieldStyled,
  FormStyled,
  LabelStyled,
  SignUpBtn,
} from './SignupForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name too Short!')
    .max(20, 'Name too Long!')
    .required('Required'),
  email: Yup.string()
    .matches(EMAIL_REGX, 'Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(7, 'Min 7 characters')
    .max(20, 'Max 20 characters')
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
      <FormStyled>
        <LabelStyled>
          <FieldStyled type="text" name="name" placeholder="Username" />
          <ErrorMessage component="span" name="name" />
        </LabelStyled>
        <LabelStyled>
          <FieldStyled type="email" name="email" placeholder="Email" />
          <ErrorMessage component="span" name="email" />
        </LabelStyled>
        <LabelStyled>
          <FieldStyled type="text" name="password" placeholder="Password" />
          <ErrorMessage component="span" name="password" />
        </LabelStyled>
        <SignUpBtn color="buttons" type="submit">
          Sign Up
        </SignUpBtn>
      </FormStyled>
    </Formik>
  );
};
