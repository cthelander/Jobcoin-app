import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const transformTransactions = (transactions) => {
  console.log(transactions);
  return transactions;
};

const TransactionGraph = ({ transactions }) => {
  const options = {
    title: { text: 'Transaction History' },
    series: [{ data: transformTransactions(transactions) }]
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
