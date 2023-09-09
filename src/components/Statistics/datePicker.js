import React from 'react';
import 'url-search-params-polyfill';

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

  const monthOptions = monthNames.map((month, index) => (
    <option key={index + 1} value={index + 1}>
      {month}
    </option>
  ));
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 10 }, (_, index) => (
    <option key={currentYear - index} value={currentYear - index}>
      {currentYear - index}
    </option>
  ));

  return (
    <div>
      <label>
        Month:
        <select value={selectedMonth} onChange={getMonth}>
          {monthOptions}
        </select>
      </label>
      <label>
        Year:
        <select value={selectedYear} onChange={getYear}>
          {yearOptions}
        </select>
      </label>
    </div>
  );
}

export default DatePicker;
