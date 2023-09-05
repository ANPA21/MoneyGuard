import { Formik, ErrorMessage, Field } from 'formik';
// import 'react-xdatepicker/dist/react-datepicker.css';
import { object, string, number, oneOf } from 'yup';
import {
  AddBtn,
  AddTitle,
  StyledForm,
  SwitcherWrapper,
  StyledSwitch,
  Wrapper,
  StyledLabel,
  StyledSum,
  StyledComment,
  // StyledCategory,
  StyledDatePicker,
  Label,
} from '../Add/Add.styled';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transactions/operations';
// import { getCategoryState } from 'redux/transactions/selectors';

const addSchema = object({
  sum: number().positive().required('Amount is required'),
  comment: string().max(30, 'Maximum must be 30 characters'),
  category: string().min(3).oneOf(['fuel', 'leusure']),
});

const initialValues = {
  type: '',
  category: '',
  sum: '',
  date: new Date(),
  comment: '',
};

export default function EditTransaction() {
  const dispatch = useDispatch();

  // const categories = useSelector(getCategoryState);

  const handleSubmit = (values, { resetForm }) => {
    const { type, category, sum, date, comment } = values;
    console.log(values);
    // dispatch(addTransaction(type, category, sum, date, comment));
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
                <StyledSum type="number" name="sum" placeholder="0.00" />
                <ErrorMessage name="sum" component="div" />
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
