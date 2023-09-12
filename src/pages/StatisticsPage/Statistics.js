import { SpinnerLoader } from 'components/Spinner/Spinner';
import { DataTable } from 'components/Statistics/StatisticsDataTable';
import DatePicker from 'components/Statistics/datePicker';
import StatiscticsChart from 'components/Statistics/statisticsChart';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getStatistics,
} from 'redux/statistics/statisticsOperations';
import {
  selectCategories,
  selectStatisticsData,
} from 'redux/statistics/statisticsSelectors';

const {
  StatSection,
  RightSideStatWrapper,
  DatePickerWrapper,
  DataWrapper,
  TitleStyled,
  LeftSideWrapper,
} = require('./Statistics.styled');
const StatiscticsPage = () => {
  const dispatch = useDispatch();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [query, setQuery] = useState(
    generateParams(selectedYear, selectedMonth)
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  function generateParams(year, month) {
    const params = new URLSearchParams();
    params.append('year', year);
    params.append('month', month);
    return params.toString();
  }
  useEffect(() => {
    const newQuery = generateParams(selectedYear, selectedMonth);
    setQuery(newQuery);
  }, [selectedYear, selectedMonth, query]);

  useEffect(() => {
    dispatch(getStatistics(query));
  }, [query, dispatch]);
  const reduxData = useSelector(selectStatisticsData);
  const categories = useSelector(selectCategories);

  const handleYearChange = event => {
    setSelectedYear(event.value);
  };

  const handleMonthChange = event => {
    setSelectedMonth(event.value);
  };

  return (
    <StatSection>
      <Helmet>
        <title>Statisctics</title>
      </Helmet>
      <RightSideStatWrapper>
        <LeftSideWrapper>
          <TitleStyled>Statistics</TitleStyled>

          {categories && reduxData ? (
            <StatiscticsChart
              reduxData={reduxData}
              categories={categories}
              style={{
                boxSizing: 'border-box',
                display: 'block',
                height: '100%',
                width: '100%',
              }}
            />
          ) : (
            <SpinnerLoader />
          )}
        </LeftSideWrapper>
        <DataWrapper>
          <DatePickerWrapper>
            <DatePicker
              getYear={handleYearChange}
              getMonth={handleMonthChange}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
            />
          </DatePickerWrapper>
          {categories && reduxData ? (
            <DataTable reduxData={reduxData} />
          ) : (
            <SpinnerLoader />
          )}
        </DataWrapper>
      </RightSideStatWrapper>
    </StatSection>
  );
};
export default StatiscticsPage;
