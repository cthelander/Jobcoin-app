import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const transformTransactions = (transactions) => {
  console.log(transactions);
  return transactions;
};

const TransactionGraph = ({ transactions }) => {
  const options = {
    rangeSelector: { selected: 1 },
    title: { text: 'Transaction History' },
    xAxis: { ordinal: false, type: "datetime" },
    series: [{
      name: 'Balance',
      type: 'spline',
      data: transactions.map(t => [(new Date(t.timestamp)).getTime(), parseInt(t.amount)]),
      tooltip: { valueDecimals: 0 }
    }]
  };

  return (
    <div className="Graph-container">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default TransactionGraph;
