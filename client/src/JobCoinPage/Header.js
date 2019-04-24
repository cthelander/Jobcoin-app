import React from 'react';
import { initialState } from '../constants'; 

const Header = ({ setAddressInfo }) => (
  <div className="Header">
    <div className="Header-Welcome">
      Welcome to Jobcoin!
    </div>
    <div
      className="Header-Link"
      onClick={() => setAddressInfo(initialState)}
    >
      Sign Out
    </div>
  </div>
);


export default Header;
