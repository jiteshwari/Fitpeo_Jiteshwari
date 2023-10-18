import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0.7 },
    { label: 'Feb', value: 0.5 },
    { label: 'Mar', value: 0.9 },
    { label: 'Apr', value: 0.7 },
    { label: 'May', value: 0.8 },
    { label: 'Jun', value: 0.3 },
    { label: 'Jul', value: 0.8 },
    { label: 'Aug', value: 1.1 },
    { label: 'Sep', value: 0.9 },
    { label: 'Oct', value: 0.7 },
    { label: 'Nov', value: 0.7 },
    { label: 'Dec', value: 0.8},
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};





export default ExpensesChart;
