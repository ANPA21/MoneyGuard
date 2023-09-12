import { Formik, Field } from 'formik';
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
} from '../Edit/Edit.styled.js';
import { forwardRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { toggleModal } from 'redux/modal/ModalSlice';
import { CustomSelect } from 'components/Add/SelectCategory/SelectCategory.js';
import { CustomSwitch } from 'components/CustomElements/CustomSwitch/CustomSwitch.js';
import { RiCalendar2Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { editItem } from 'redux/transactionsRedux/transactionsOperations.js';
import { selectorTransactions } from 'redux/transactionsRedux/transactionsSelectors.js';

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

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <button type="button" className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
    <RiCalendar2Fill className="date-icon" onClick={onClick} />
  </>
));

export default function EditTransaction({ id }) {
  const dispatch = useDispatch();
  const transactions = useSelector(selectorTransactions);
  const [categories, setCategories] = useState(() => {
    return JSON.parse(window.localStorage.getItem('categories')) ?? [];
  });

  const transaction = transactions.find(transaction => transaction._id === id);

  const initialValues = {
    type: transaction.type,
    category: transaction.category ? transaction.category : '',
    value: transaction.value,
    date: new Date(transaction.date),
    comment: transaction.comment,
  };

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
  }, [categories, transactions]);

  const optionCategories = categories.map(category => {
    return {
      value: category,
      label: category,
    };
  });

  const handleSubmit = values => {
    dispatch(editItem({ id, values }));
    dispatch(toggleModal());
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
                <StyledSum type="number" name="value" />
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
              <StyledComment type="textarea" name="comment" />
              <ErrorMessageStyled name="comment" component="div" />
            </StyledLabel>

            <AddBtn type="submit">Save</AddBtn>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
