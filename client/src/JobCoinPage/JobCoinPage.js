import React from 'react';

import Header from './Header';
import Balance from './Balance';
import SendJobcoin from './SendJobcoin';
import TransactionGraph from './TransactionGraph';

const JobCoinPage = ({ addressInfo, setAddressInfo }) => {
  const { address, balance, transactions } = addressInfo;

  return (
    <div>
      <Header setAddressInfo={setAddressInfo}/>
      <Balance balance={balance}/>
      <SendJobcoin
        address={address}
        setAddressInfo={setAddressInfo}
      />
      <TransactionGraph transactions={transactions}/>
    </div>
  );
}

export default JobCoinPage;
