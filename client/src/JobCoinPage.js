import React, { useState } from 'react';
import { initialState, initialSendState } from './constants'; 

const apiCall = ({toAddress, fromAddress, amount}) => {
  const axios = require('axios');

  axios.post('/transactions',
    {
      toAddress,
      fromAddress,
      amount 
    },
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

const Header = ({ setAddressInfo }) => (
  <div className="Box">
    <div className="Header">
      Welcome to Jobcoin!
      <button
        className="Button"
        onClick={() => setAddressInfo(initialState)}
      >
      Sign Out
      </button>
    </div>
  </div>
);

const Balance = ({ balance }) => (
  <div className="Box">
    <div className="Header">
      Jobcoing Balance 
    </div>
    <div className="Section">
      {balance} 
    </div>
  </div>
);

const SendJobcoin = ({ sendData, setSendData, submitTransaction}) => (
  <div className="Box">
    <div className="Header">
      Send Jobcoin
    </div>
    <div className="Section">
      <form onSubmit={submitTransaction}>
        <div>
          <label>
            Destination Address
            <input
              className="Input"
              onChange={(e) => setSendData({
                ...sendData,
                toAddress: e.target.value
              })}
            />
          </label>
        </div>
        <div>
          <label>
            Amount to Send
            <input
              className="Input"
              onChange={(e) => setSendData({
                ...sendData,
                amount: e.target.value
              })}
            />
          </label>
        </div>
        <div>
          <input
            className="Button"
            type="submit"
            value="Send Joncoins"
          />
        </div>
      </form>
    </div>
  </div>
); 

const JobCoinPage = ({ addressInfo, setAddressInfo }) => {
  const { address, balance, transactions } = addressInfo;
  const [sendData, setSendData] = useState({
    ...initialSendState,
    fromAddress: address
  });
  const submitTransaction = (e) => {
    e.preventDefault();
    apiCall(sendData);
  };

  return (
    <div className="">
      <Header setAddressInfo={setAddressInfo}/>
      <Balance balance={balance}/>
      <SendJobcoin
        setSendData={setSendData}
        sendData={sendData}
        submitTrasaction={submitTransaction}
      />
    </div>
  );
}

export default JobCoinPage;
