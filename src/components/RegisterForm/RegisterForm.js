import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { CustomButton } from 'components/CustomElements/CustomButton';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import Logotip from '../../images/logo.svg';
import {
  FormStyled,
  LabelStyled,
  LogotipStyled,
} from 'components/LoginForm/LoginForm.styled';
import { toast } from 'react-toastify';
import { MdEmail, MdHttps } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import PasswordStrengthBar from 'react-password-strength-bar';
import { CustomNavLinkBtn } from 'components/CustomElements/CustomNavLink';

const ValidationSchema = Yup.object().shape({
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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
    toast.success(`Welcome to Money Guard, ${values.name}!`);
    
    console.log('Регистрация прошла успешно');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <FormStyled>
        <LogotipStyled>
          <img src={Logotip} alt="Logo MoneyGuard" width="36px" height="36px" />
          <h3>MoneyGuard</h3>
        </LogotipStyled>
        <LabelStyled>
          <FaUser className="iconReg" />
          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage component="span" name="name" />
        </LabelStyled>

        <LabelStyled>
          <MdEmail className="iconEmail" />
          <Field
            name="email"
            type="email"
            placeholder="E-mail"
            autoComplete="off"
          />
          <ErrorMessage component="span" name="email" />
        </LabelStyled>

        <LabelStyled>
          <MdHttps className="iconPass" />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <ErrorMessage component="span" name="password" />
        </LabelStyled>

        <LabelStyled>
          <MdHttps className="iconPass" />
          <Field
            name="passwordConfirm"
            type="password"
            placeholder="Confirm password"
            autoComplete="off"
          />
          <PasswordStrengthBar minLength={6} maxLength={12} />
          <ErrorMessage component="span" name="password" />
        </LabelStyled>

        <CustomButton type="submit">Register</CustomButton>

        <CustomNavLinkBtn to="/login">Log In</CustomNavLinkBtn>
        
      </FormStyled>
    </Formik>
  );
};

export default RegisterForm;
