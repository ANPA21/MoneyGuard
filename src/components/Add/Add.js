import { Formik, ErrorMessage, Field } from 'formik';
import Switch from '@mui/material/Switch';
import 'react-datepicker/dist/react-datepicker.css';
import { object, string, number } from 'yup';
import {
  AddBtn,
  AddTitle,
  StyledForm,
  SwitcherWrapper,
  // StyledSwitch,
  Wrapper,
  StyledLabel,
  StyledSum,
  StyledComment,
  // StyledCategory,
  StyledDatePicker,
  Label,
} from './Add.styled';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transactions/operations';
// import { getCategoryState } from 'redux/transactions/selectors';

const addSchema = object({
  value: number().positive().required('Amount is required'),
  comment: string().max(30, 'Maximum must be 30 characters'),
  category: string().min(3),
});

const initialValues = {
  type: 'expense',
  category: '',
  value: '',
  date: new Date(),
  comment: '',
};

export default function AddTransaction() {
  const dispatch = useDispatch();

  // const categories = useSelector(getCategoryState);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(addTransaction(values));
    resetForm();
  };

  return (
    <>
      <AddTitle>Add transaction</AddTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={addSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, validate }) => (
          <StyledForm autoComplete="off">
            <SwitcherWrapper>
              <span>Income</span>
              <Switch
                name="transaction"
                value="expense"
                checked={values.type === 'expense'}
                onChange={(event, checked) => {
                  setFieldValue('type', checked ? 'expense' : 'income');
                }}
                width="80px"
                height="40px"
                handleDiameter={44}
                onHandleColor="#FF6596"
                offHandleColor="#24cca7"
                onColor="#fff"
                offColor="#fff"
              />
              <span>Expense</span>
            </SwitcherWrapper>
            {values.type === 'expense' ? (
              <Wrapper>
                <Field name="category" as="select">
                  <option key="default" defaultValue hidden>
                    Select a category
                  </option>
                  <option key="1" value="Car">
                    Car
                  </option>
                  {/* {categories.map((category,index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))} */}
                </Field>
                <ErrorMessage name="category" component="div" />
              </Wrapper>
            ) : (
              (values.category = '')
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

            <AddBtn type="submit">Add</AddBtn>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
