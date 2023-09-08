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
  StyledDatePicker,
  Label,
  StyledSelect,
} from './Add.styled';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transactions/operations';
import { toggleModal } from 'redux/modal/ModalSlice';
import { CustomSwitch } from 'components/CustomElements/CustomSwitch';
// import { getCategoryState } from 'redux/transactions/selectors';
// import { fetchCategories } from 'redux/categories/operations';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { components } from 'react-select';

const addSchema = object({
  value: number().positive().required('Amount is required'),
  comment: string().max(30, 'Maximum must be 30 characters'),
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

const DropdownIndicator = props => {
  if (props.isFocused) {
    return (
      <components.DropdownIndicator {...props}>
        <VscChevronUp />
      </components.DropdownIndicator>
    );
  }
  return (
    <components.DropdownIndicator {...props}>
      <VscChevronDown />
    </components.DropdownIndicator>
  );
};

const CustomSelect = ({ onChange, options, value, className }) => {
  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };

  return (
    <div className={className}>
      <StyledSelect
        value={defaultValue(options, value)}
        placeholder="Select a category"
        components={{ DropdownIndicator }}
        onChange={value => onChange(value)}
        options={options}
        classNamePrefix="Select"
      />
    </div>
  );
};

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
            <SwitcherWrapper className="custom-switch">
              <CustomSwitch
                checked={values.type === 'income'}
                onChange={isChecked => {
                  setFieldValue('type', isChecked ? 'income' : 'expense');
                }}
              />
              {/* <span>Income</span>
              <Switch
                name="transaction"
                value="expense"
                checked={values.type === 'expense'}
                onChange={(event, checked) => {
                  setFieldValue('type', checked ? 'expense' : 'income');
                }}
              />
              <span>Expense</span> */}
            </SwitcherWrapper>
            {values.type === 'expense' ? (
              <>
                <CustomSelect
                  options={categories}
                  value={values.category}
                  onChange={value => setFieldValue('category', value.value)}
                  className="Select"
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
