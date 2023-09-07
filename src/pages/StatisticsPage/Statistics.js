import { DataTable } from 'components/Statistics/StatisticsDataTable';
import StatiscticsChart from 'components/Statistics/statisticsChart';
import { Helmet } from 'react-helmet-async';

const { Currency } = require('components/Currency/Currency');
const {
  StatSection,
  LeftSideStatWrapper,
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
      <LeftSideStatWrapper>
        <div>Balance Comp</div>
        <Currency />
      </LeftSideStatWrapper>
      <RightSideStatWrapper>
        <TitleStyled>Statistics</TitleStyled>
        <div>
          <StatiscticsChart />
        </div>

        <DataWrapper>
          <DatePickerWrapper>Datepicker here</DatePickerWrapper>
          <DataTable />
        </DataWrapper>
      </RightSideStatWrapper>
    </StatSection>
  );
};
export default StatiscticsPage;
