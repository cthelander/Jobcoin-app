import React, { useState } from 'react';

import JobCoinPage from './JobCoinPage/JobCoinPage'; 
import SignInPage from './signInPage/SignInPage'; 
import { initialState } from './constants'; 

import './App.css';

const App = () => {
  const [addressInfo, setAddressInfo] = useState(initialState);

  return (
    <div className="App">
      {addressInfo.isSignedIn ?
        <JobCoinPage
          addressInfo={addressInfo}
          setAddressInfo={setAddressInfo}
        /> :
        <SignInPage
          setAddressInfo={setAddressInfo}
          error={addressInfo.error}
        />
      }
    </div>
  );
};

export default App;
