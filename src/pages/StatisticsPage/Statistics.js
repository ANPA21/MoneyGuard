import { DataTable } from 'components/Statistics/StatisticsDataTable';

const { Currency } = require('components/Currency/Currency');
const { Helmet } = require('react-helmet');
const {
  StatSection,
  LeftSideStatWrapper,
  RightSideStatWrapper,
  DatePickerWrapper,
  DataWrapper,
  TitleStyled,
} = require('./Statistics.styled');

export const StatiscticsPage = () => {
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
        <div>Donut Chart</div>

        <DataWrapper>
          <DatePickerWrapper>Datepicker here</DatePickerWrapper>
          <DataTable />
        </DataWrapper>
      </RightSideStatWrapper>
    </StatSection>
  );
};
