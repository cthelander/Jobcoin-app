import React from 'react';

import Header from './Header';
import Balance from './Balance';
import SendJobcoin from './SendJobcoin';
import TransactionGraph from './TransactionGraph';

const JobCoinPage = ({ addressInfo, setAddressInfo }) => {
  const { address, balance, transactions } = addressInfo;

  return (
    <div>
      <Header
        address={address}
        setAddressInfo={setAddressInfo}
      />
      <div className="Jobcoin-container">
        <div>
          <Balance balance={balance}/>
          <SendJobcoin
            address={address}
            setAddressInfo={setAddressInfo}
          />
        </div>
        <TransactionGraph
          address={address}
          balance={balance}
          transactions={transactions}
        />
      </div>
    </div>
  );
}

export default JobCoinPage;
