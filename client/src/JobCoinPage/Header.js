import React from 'react';
import { initialState } from '../constants'; 

const Header = ({ address, setAddressInfo }) => (
  <div className="Header">
    <div className="Header-Welcome">
      Welcome to Jobcoin!
    </div>
    <div className="Jobcoin-container">
      {address} Signed in 
      <div
        className="Header-Link"
        onClick={() => setAddressInfo(initialState)}
      >
        Sign Out
      </div>
    </div>
  </div>
);


export default Header;
