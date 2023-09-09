import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { colors } from './statiscticsColors';

Chart.register(ArcElement, Tooltip, Legend);

const StatiscticsChart = ({ reduxData, categories }) => {
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
    hoverBorderWidth: 0,
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
    <div style={{ width: '300px', height: '300px' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default StatiscticsChart;
