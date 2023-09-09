import { Formik, ErrorMessage, Field } from 'formik';
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
} from '../Edit/Edit.styled.js';
import { forwardRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { toggleModal } from 'redux/modal/ModalSlice';
import { CustomSelect } from 'components/Add/SelectCategory/SelectCategory.js';
import { CustomSwitch } from 'components/CustomElements/CustomSwitch/CustomSwitch.js';
import { RiCalendar2Fill } from 'react-icons/ri';
// import { getCategoryState } from 'redux/transactions/selectors';
//!В комменты что бы не ругалась проверка
import { useDispatch } from 'react-redux';
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

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <>
    <button type="button" className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
    <RiCalendar2Fill className="date-icon" onClick={onClick} />
  </>
));

export default function EditTransaction() {
  const dispatch = useDispatch();

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
    const { type, category, value, date, comment } = values;
    console.log(values);
    // Второй консоль лог для того что бы проверка не ругалась, когда все настроим, удалим
    console.log(type, category, value, date, comment);
    // dispatch(addTransaction(type, category, value, date, comment));
    dispatch(toggleModal());
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

            <AddBtn type="submit">Save</AddBtn>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
