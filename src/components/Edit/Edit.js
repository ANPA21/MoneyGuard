import { Formik, ErrorMessage, Field } from 'formik';
// import 'react-xdatepicker/dist/react-datepicker.css';
import { object, string, number } from 'yup';
import {
  AddBtn,
  AddTitle,
  StyledForm,
  SwitcherWrapper,
  Wrapper,
  StyledLabel,
  StyledSum,
  StyledComment,
  // StyledCategory,
  StyledDatePicker,
  Label,
} from '../Add/Add.styled';

// import { getCategoryState } from 'redux/transactions/selectors';
//!В комменты что бы не ругалась проверка
// import { useDispatch } from 'react-redux';
// import { addTransaction } from 'redux/transactions/operations';

const addSchema = object({
  value: number().positive().required('Amount is required'),
  comment: string().max(30, 'Maximum must be 30 characters'),
  category: string().min(3).oneOf(['fuel', 'leusure']),
});

const initialValues = {
  type: '',
  category: '',
  value: '',
  date: new Date(),
  comment: '',
};

export default function EditTransaction() {
  // const dispatch = useDispatch();

  // const categories = useSelector(getCategoryState);

  const handleSubmit = (values, { resetForm }) => {
    const { type, category, value, date, comment } = values;
    console.log(values);
    // Второй консоль лог для того что бы проверка не ругалась, когда все настроим, удалим
    console.log(type, category, value, date, comment);
    // dispatch(addTransaction(type, category, value, date, comment));
    // resetForm();
  };

  return (
    <>
      <AddTitle>Edit transaction</AddTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={addSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, validate }) => (
          <StyledForm autoComplete="off">
            <SwitcherWrapper>
              <label>
                <Field type="radio" name="type" value="income" />
                Income
              </label>
              <label>
                <Field type="radio" name="type" value="expense" />
                Expense
              </label>
            </SwitcherWrapper>
            {values.type === 'expense' && (
              <Wrapper>
                <Field name="category" type="text" />
                <ErrorMessage name="category" component="div" />
              </Wrapper>
            )}
            <Wrapper>
              <Label>
                <StyledSum type="number" name="value" placeholder="0.00" />
                <ErrorMessage name="value" component="div" />
              </Label>
              <Label>
                <Field name="date" validate={validate}>
                  {({ field, form, meta }) => (
                    <StyledDatePicker
                      showIcon
                      name="date"
                      dateFormat="dd.MM.yyyy"
                      minDate={new Date()}
                      selected={values.date || null}
                      onChange={date => setFieldValue('date', date)}
                      shouldCloseOnSelect={true}
                    />
                  )}
                </Field>
              </Label>
            </Wrapper>

            <StyledLabel>
              <StyledComment
                type="textarea"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="div" />
            </StyledLabel>

            <AddBtn type="submit">Save</AddBtn>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
