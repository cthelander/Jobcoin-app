import React, { useState } from 'react';

import { initialState } from '../constants';

export const checkAddress = (inputAddress, setAddressInfo) => {
  const axios = require('axios');

  axios.get('signin?address=' + inputAddress)
  .then(function (response) {
    console.log(response);
    const addressExists =
      response &&
      response.data &&
      (response.data.balance !== "0" ||
      response.data.transactions.length !== 0)
    if (addressExists) {
      setAddressInfo({
        isSignedIn: true,
        address: inputAddress,
        balance: response.data.balance,
        transactions: response.data.transactions
      });
    } else {
      setAddressInfo({
        ...initialState,
        error: true
      });
    }
  })
  .catch(function (error) {
    console.log(error);
  });
};

const SignInPage = ({ setAddressInfo, error }) => {
  const [inputAddress, setInputAddress] = useState("");
	
  const submitSignIn = (e) => {
    e.preventDefault();
    checkAddress(inputAddress, setAddressInfo);
  };

  return (
    <div className="Box">
      <div className="Box-Header">
        Welcome! Sign In With Your Jobcoin Address
      </div>
      <div className="Section">
        <form onSubmit={submitSignIn}>
          <div>
          <label>
            Jobcoin Address
          </label>
          </div>
          <div>
            <input
              className="Input"
              onChange={(e) => setInputAddress(e.target.value)}
            />
          </div>
          <div>
          {error && 
            <div className="SignIn-error">
              There was an error with that address please try again.
            </div>
          }
          <input
            className="Button"
            type="submit"
            value="Sign In"
          />
          </div>
        </form>
      </div>
   </div>
  );
}

export default SignInPage;
