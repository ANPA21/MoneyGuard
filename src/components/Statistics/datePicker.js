import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'url-search-params-polyfill';

axios.defaults.baseURL = 'https://moneyguardbackend.onrender.com/';

function DatePicker() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    const query = generateParams(selectedYear, selectedMonth);
    getStatistics(query);
  }, [selectedYear, selectedMonth]);

  const handleYearChange = event => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = event => {
    setSelectedMonth(event.target.value);
  };
  const generateParams = (year, month) => {
    const params = new URLSearchParams();
    params.append('year', year);
    params.append('month', month);
    return params.toString();
  };

  const getStatistics = async query => {
    try {
      const response = await axios.get(`/transactions/statistics?${query}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

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
        <select value={selectedMonth} onChange={handleMonthChange}>
          {monthOptions}
        </select>
      </label>
      <label>
        Year:
        <select value={selectedYear} onChange={handleYearChange}>
          {yearOptions}
        </select>
      </label>
    </div>
  );
}

export default DatePicker;
