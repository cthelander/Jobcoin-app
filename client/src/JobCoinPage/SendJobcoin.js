import React, { useState } from 'react';

import { initialSendState } from '../constants'; 
import { checkAddress } from '../signInPage/SignInPage';

const apiCall = ({toAddress, fromAddress, amount}, address, setAddressInfo) => {
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
    checkAddress(address, setAddressInfo);
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

const SendJobcoin = ({ address, setAddressInfo }) => {
  const [sendData, setSendData] = useState({
    ...initialSendState,
    fromAddress: address
  });

  const submitTransaction = (e) => {
    e.preventDefault();
    apiCall(sendData, address, setAddressInfo);
  };

  return (
    <div className="Box">
      <div className="Box-Header">
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
              value="Send Jobcoins"
            />
          </div>
        </form>
      </div>
    </div>
  ); 
};

export default SendJobcoin;
