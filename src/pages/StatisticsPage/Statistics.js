import { DataTable } from 'components/Statistics/StatisticsDataTable';
import DatePicker from 'components/Statistics/datePicker';
import StatiscticsChart from 'components/Statistics/statisticsChart';
import { Helmet } from 'react-helmet-async';

const {
  StatSection,
  RightSideStatWrapper,
  DatePickerWrapper,
  DataWrapper,
  TitleStyled,
} = require('./Statistics.styled');

const StatiscticsPage = () => {
  return (
    <StatSection>
      <Helmet>
        <title>Statisctics</title>
      </Helmet>
      <RightSideStatWrapper>
        <TitleStyled>Statistics</TitleStyled>
        <div>
          <StatiscticsChart />
        </div>

        <DataWrapper>
          <DatePickerWrapper>
            <DatePicker />
          </DatePickerWrapper>
          <DataTable />
        </DataWrapper>
      </RightSideStatWrapper>
    </StatSection>
  );
};
export default StatiscticsPage;
