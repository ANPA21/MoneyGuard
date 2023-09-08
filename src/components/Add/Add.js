import { Formik, ErrorMessage, Field, useField } from 'formik';
// import { useEffect } from 'react';
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
  StyledDatePicker,
  Label,
  StyledSelect,
  SelectLabel,
} from './Add.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/transactions/operations';
// import { getCategoryState } from 'redux/transactions/selectors';
// import { fetchCategories } from 'redux/categories/operations';
// import Select, { components } from 'react-select';

const addSchema = object({
  value: number().positive().required('Amount is required'),
  comment: string().max(30, 'Maximum must be 30 characters'),
  category: string().min(3),
});

const CustomSelect = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Wrapper>
      <SelectLabel>
        <StyledSelect {...field} {...props} />
      </SelectLabel>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Wrapper>
  );
};

const initialValues = {
  type: 'expense',
  category: '',
  value: '',
  date: new Date(),
  comment: '',
};

const categories = ['car', 'products', 'education'];

export default function AddTransaction() {
  const dispatch = useDispatch();

  // const categories = useSelector(getCategoryState);
  // console.log(categories);

  // useEffect(() => {
  //   if (categories.length === 0) {
  //   dispatch(fetchCategories());
  //   }
  // }, [ dispatch]);

  // const handleSelectChange = category => {
  //   setTransactionState(category);
  // };

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
        {({ values, setFieldValue, validate, ...props }) => (
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
              />
              <span>Expense</span>
            </SwitcherWrapper>
            {values.type === 'expense' ? (
              <>
                <CustomSelect name="category" placeholder="Select a category">
                  <option key="default" defaultValue hidden>
                    Select a category
                  </option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </CustomSelect>
                <ErrorMessage name="category" component="div" />
              </>
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
