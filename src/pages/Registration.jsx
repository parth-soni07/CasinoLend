import React from 'react';
import { useAccount, useContractWrite } from 'wagmi';

function Registration() {
  const { address, isConnected } = useAccount();
  const { write: registerUser } = useContractWrite({
    // Add your contract config here
    functionName: 'registerUser',
  });

  return (
    <div>
      <h1>Registration</h1>
      {isConnected ? (
        <div>
          <p>Connected Address: {address}</p>
          <button onClick={() => registerUser()}>Register</button>
        </div>
      ) : (
        <p>Please connect your wallet to register.</p>
      )}
    </div>
  );
}

export default Registration;