import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { colors } from './statiscticsColors';
import { useSelector } from 'react-redux';
import { selectorBalance } from 'redux/balance/balance.Selectors';
import {
  Balance,
  DonutContainer,
  DoughnutSt,
} from './statisticsDataTable.styled';

Chart.register(ArcElement, Tooltip, Legend);

const StatiscticsChart = ({ reduxData, categories }) => {
  const balance = useSelector(selectorBalance);
  const chartData = {
    labels: categories,
    datasets: [
      {
        data: reduxData.categoryExpenses.map(category => category.total),
        backgroundColor: categories.map(item => {
          const colorInfo = colors.find(colorItem => colorItem.name === item);
          return colorInfo ? colorInfo.color : '#ffff';
        }),
        borderWidth: 0.5,
        cutout: '60%',
      },
    ],
  };
  const options = {
    borderRadius: 2,
    hoverBorderWidth: 1,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <DonutContainer>
      <Balance
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        ${reduxData.totalExpenses.toFixed(2)}
      </Balance>
      <DoughnutSt data={chartData} options={options} />
    </DonutContainer>
  );
};

export default StatiscticsChart;
