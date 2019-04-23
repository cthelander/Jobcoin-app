import React, { useState } from 'react';

import JobCoinPage from './JobCoinPage'; 
import SignInPage from './SignInPage'; 
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
        <SignInPage setAddressInfo={setAddressInfo}/>
      }
    </div>
  );
};

export default App;
