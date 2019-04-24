import React from 'react';

const Balance = ({ balance }) => (
  <div className="Box">
    <div className="Box-Header">
      Jobcoin Balance 
    </div>
    <div className="Section">
      {balance} 
    </div>
  </div>
);

export default Balance;
