import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  ErrorMsg,
  FormBtn,
  FormField,
  FormLabel,
  StyledForm,
} from './Form.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name too Short!')
    .max(20, 'Name too Long!')
    .required('Required'),
  number: Yup.number()
    .positive('Thats not a number!')
    .typeError('Must be a number!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <StyledForm>
        <FormLabel>
          Name
          <FormField type="text" name="name" />
          <ErrorMsg component="span" name="name" />
        </FormLabel>
        <FormLabel>
          Number
          <FormField type="tel" name="number" />
          <ErrorMsg component="span" name="number" />
        </FormLabel>
        <FormBtn type="submit">Add Contact</FormBtn>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
