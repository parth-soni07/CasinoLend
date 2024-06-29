import React from 'react';
import { useAccount, useContractRead } from 'wagmi';

function Dashboard() {
  const { address } = useAccount();

  const { data: userInfo } = useContractRead({
    // Add your contract config here
    functionName: 'users',
    args: [address],
  });

  return (
    <div>
      <h1>Dashboard</h1>
      {userInfo && (
        <div>
          <p>Reputation: {userInfo.reputation.toString()}</p>
          <p>Borrowed Amount: {userInfo.borrowedAmount.toString()}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;