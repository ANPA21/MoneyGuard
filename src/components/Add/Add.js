import { Formik, ErrorMessage, Field } from 'formik';
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
  Label,
} from './Add.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/ModalSlice';
import { CustomSwitch } from 'components/CustomElements/CustomSwitch/CustomSwitch';
// import { getCategoryState } from 'redux/transactions/selectors';
// import { fetchCategories } from 'redux/categories/operations';
import { addTransaction } from 'redux/transactionsRedux/transactionsOperations';
import { RiCalendar2Fill } from 'react-icons/ri';
import { CustomSelect } from './SelectCategory/SelectCategory';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';
const addSchema = object({
  value: number().positive().required('Amount is required'),
  comment: string()
    .max(30, 'Maximum must be 30 characters')
    .required('Please fill in comment'),
  category: string()
    .min(3)
    .oneOf([
      'Main expenses',
      'Products',
      'Car',
      'Self care',
      'Child care',
      'Household products',
      'Education',
      'Leisure',
      'Other expenses',
      'Entertainment',
    ]),
});
const initialValues = {
  type: 'expense',
  category: '',
  value: '',
  date: new Date(),
  comment: '',
};
const categories = [
  { value: 'Main expenses', label: 'Main expenses' },
  { value: 'Products', label: 'Products' },
  { value: 'Car', label: 'Car' },
  { value: 'Self care', label: 'Self care' },
  { value: 'Child care', label: 'Child care' },
  { value: 'Household products', label: 'Household products' },
  { value: 'Education', label: 'Education' },
  { value: 'Leisure', label: 'Leisure' },
  { value: 'Other expenses', label: 'Other expenses' },
  { value: 'Entertainment', label: 'Entertainment' },
];
const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <button type="button" className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
    <RiCalendar2Fill className="date-icon" onClick={onClick} />
  </>
));
export default function AddTransaction() {
  const dispatch = useDispatch();
  // const categories = useSelector(getCategoryState);
  // console.log(categories);
  // useEffect(() => {
  //   console.log(categories);
  //   if (categories.length === 0) {
  //     dispatch(fetchCategories());
  //   }
  // }, [dispatch]);
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(addTransaction(values));
    resetForm();
    dispatch(toggleModal());
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
              <CustomSwitch
                checked={values.type === 'expense'}
                onChange={isChecked => {
                  setFieldValue('type', isChecked ? 'expense' : 'income');
                }}
              />
            </SwitcherWrapper>
            {values.type === 'expense' ? (
              <>
                <CustomSelect
                  options={categories}
                  value={values.category}
                  onChange={value => setFieldValue('category', value.value)}
                  className="Select"
                  name="category"
                  // styles={selectStyles()}
                />
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
                    <DatePicker
                      name="date"
                      dateFormat="dd.MM.yyyy"
                      minDate={new Date()}
                      selected={values.date || null}
                      onChange={date => setFieldValue('date', date)}
                      shouldCloseOnSelect={true}
                      customInput={<CustomInput />}
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
