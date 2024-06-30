import React from 'react';
import { useAccount, useContractRead } from 'wagmi';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { contractConfig } from '../contracts/contractConfig';

function Dashboard() {
  const { address } = useAccount();

  const { data: userInfo } = useContractRead({
    ...contractConfig.UserRegistry,
    functionName: 'users',
    args: [address],
  });

  const { data: tradeDetails } = useContractRead({
    ...contractConfig.TradingPlatform,
    functionName: 'getTradeDetails',
    args: [address],
  });

  const { data: tokenBalance } = useContractRead({
    ...contractConfig.TradeToken,
    functionName: 'balanceOf',
    args: [address],
  });

  return (
    <div>
      <h1>Dashboard</h1>
      {userInfo && (
        <div>
          <h2>User Information</h2>
          <p>Registered: {userInfo.isRegistered ? 'Yes' : 'No'}</p>
          <p>Reputation: {userInfo.reputation.toString()}</p>
          <p>Borrowed Amount: {userInfo.borrowedAmount.toString()}</p>
        </div>
      )}
      {tradeDetails && (
        <div>
          <h2>Current Trade</h2>
          <p>Amount: {tradeDetails[0].toString()}</p>
          <p>Start Time: {new Date(tradeDetails[1].toNumber() * 1000).toLocaleString()}</p>
          <p>Initial Price: {tradeDetails[2].toString()}</p>
          <p>Active: {tradeDetails[3] ? 'Yes' : 'No'}</p>
        </div>
      )}
      {tokenBalance && (
        <div>
          <h2>Token Balance</h2>
          <p>{tokenBalance.toString()} TTK</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;