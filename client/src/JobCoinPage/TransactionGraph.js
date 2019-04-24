import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const transformTransactions = (address, balance, transactions) => {
  let currentBalance = 0;
  return transactions.map(transaction => {
    const unixTime = (new Date(transaction.timestamp)).getTime();
    const amount = parseInt(transaction.amount);

    // add transaction amount if sent to address or subtract if address sent amount
    if(transaction.toAddress === address) {
      currentBalance = currentBalance + amount;
    } else {
      currentBalance = currentBalance - amount;
    }

    return (
      [unixTime, currentBalance]
    );
  });
};

const TransactionGraph = ({ address, balance, transactions }) => {
  const options = {
    rangeSelector: { selected: 1 },
    title: { text: 'Transaction History' },
    xAxis: { ordinal: false, type: "datetime" },
    series: [{
      name: 'Balance',
      type: 'spline',
      data: transformTransactions(address, balance, transactions),
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
