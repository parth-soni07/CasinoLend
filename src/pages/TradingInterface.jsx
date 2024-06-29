import React, { useState } from 'react';
import { useContractRead, useContractWrite } from 'wagmi';

function TradingInterface() {
  const [borrowAmount, setBorrowAmount] = useState('');

  const { data: poolFunds } = useContractRead({
    // Add your contract config here
    functionName: 'totalPoolFunds',
  });

  const { write: borrow } = useContractWrite({
    // Add your contract config here
    functionName: 'borrow',
  });

  const { write: settleTrade } = useContractWrite({
    // Add your contract config here
    functionName: 'settleTrade',
  });

  return (
    <div>
      <h1>Trading Interface</h1>
      <p>Available Pool Funds: {poolFunds?.toString() || '0'}</p>
      <input 
        type="number" 
        value={borrowAmount} 
        onChange={(e) => setBorrowAmount(e.target.value)}
        placeholder="Amount to borrow"
      />
      <button onClick={() => borrow({ args: [borrowAmount] })}>Borrow</button>
      <button onClick={() => settleTrade()}>Settle Trade</button>
    </div>
  );
}

export default TradingInterface;