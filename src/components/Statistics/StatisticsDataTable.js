import {
  ColorBox,
  RowText,
  StyledTable,
  StyledTdCat,
  StyledTdSum,
  StyledTdTotal,
  StyledThCat,
  StyledThSum,
  StyledTr,
} from './statisticsDataTable.styled';
import { colors } from './statiscticsColors';

export const DataTable = ({ reduxData }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledThCat>Category</StyledThCat>
          <StyledThSum>Sum</StyledThSum>
        </tr>
      </thead>
      <tbody>
        {reduxData.categoryExpenses
          .filter(category => category.total !== '0.00')
          .map(category => {
            const boxColor = colors.find(color => color.name === category.name);
            return (
              <StyledTr key={category.name}>
                <StyledTdCat>
                  <ColorBox color={boxColor.color} />
                  <RowText>
                    <span>{category.name}</span>
                    <StyledTdSum>{category.total}</StyledTdSum>
                  </RowText>
                </StyledTdCat>
              </StyledTr>
            );
          })}
      </tbody>
      <tfoot>
        <tr>
          <td>Expenses</td>
          <StyledTdTotal>{reduxData.totalExpenses}</StyledTdTotal>
        </tr>
        <tr>
          <td>Income</td>
          <StyledTdTotal>{reduxData.totalIncome}</StyledTdTotal>
        </tr>
      </tfoot>
    </StyledTable>
  );
};
