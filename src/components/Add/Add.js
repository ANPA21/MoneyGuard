import { Formik, Field } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
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
  Label,
  ErrorMessageStyled,
} from './Add.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/ModalSlice';

import { CustomSwitch } from 'components/CustomElements/CustomSwitch/CustomSwitch';
import { addTransaction } from 'redux/transactionsRedux/transactionsOperations';
import { RiCalendar2Fill } from 'react-icons/ri';
import { CustomSelect } from './SelectCategory/SelectCategory';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { forwardRef, useState, useEffect } from 'react';
import axios from 'axios';
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
  // const error = useSelector(selectError);

  const [categories, setCategories] = useState(() => {
    return JSON.parse(window.localStorage.getItem('categories')) ?? [];
  });

  const getCategories = async () => {
    try {
      const response = await axios.get(`/transactions/categories`);
      setCategories(response.data);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }

    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const optionCategories = categories.map(category => {
    return {
      value: category,
      label: category,
    };
  });

  const handleSubmit = (values, { resetForm }) => {
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
                  options={optionCategories}
                  value={values.category}
                  onChange={value => setFieldValue('category', value.value)}
                  className="Select"
                  name="category"
                />
                <ErrorMessageStyled name="category" component="div" />
              </>
            ) : (
              (values.category = '')
            )}
            <Wrapper>
              <Label>
                <StyledSum type="number" name="value" placeholder="0.00" />
                <ErrorMessageStyled name="value" component="div" />
              </Label>
              <Label>
                <Field name="date" validate={validate}>
                  {({ field, form, meta }) => (
                    <DatePicker
                      name="date"
                      dateFormat="dd.MM.yyyy"
                      maxDate={new Date()}
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
              <ErrorMessageStyled name="comment" component="div" />
            </StyledLabel>
            <AddBtn type="submit">Add</AddBtn>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
