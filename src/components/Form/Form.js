import * as Yup from 'yup';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  ErrorMsg,
  FormBtn,
  FormField,
  FormLabel,
  StyledContactForm,
  StyledForm,
  Title,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { checkExistingContacts } from 'components/utils/checkExistingContact';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

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
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        if (checkExistingContacts(contacts, values.name)) {
          alert(`${values.name} is already in contacts!`);
          return;
        }
        dispatch(addContact({ id: nanoid(), ...values }));
        actions.resetForm();
      }}
      validationSchema={SignupSchema}
    >
      <StyledContactForm>
        <Title>Phonebook</Title>
        <FormLabel>
          <FormField type="text" name="name" placeholder="Name" />
          <ErrorMsg component="span" name="name" />
        </FormLabel>
        <FormLabel>
          <FormField type="tel" name="number" placeholder="Phone number" />
          <ErrorMsg component="span" name="number" />
        </FormLabel>
        <FormBtn variant="outlined" color="buttons" type="submit">
          Add Contact
        </FormBtn>
      </StyledContactForm>
    </Formik>
  );
};
