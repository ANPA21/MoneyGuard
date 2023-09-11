import React, { Fragment } from 'react';
import 'url-search-params-polyfill';
import { DateSelector } from './dateSelector/dateSelector';

function DatePicker({ getYear, getMonth, selectedMonth, selectedYear }) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthOptions = monthNames.map((month, index) => ({
    value: index + 1,
    label: month,
  }));
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 10 }, (_, index) => ({
    value: currentYear - index,
    label: String(currentYear - index),
  }));
  return (
    <Fragment>
      <DateSelector
        options={monthOptions}
        value={selectedMonth}
        onChange={getMonth}
        className="selectMonth"
        name="selectMonth"
      />
      <DateSelector
        options={yearOptions}
        value={selectedYear}
        onChange={getYear}
        className="selectYear"
        name="selectYear"
      />
    </Fragment>
  );
}

export default DatePicker;
