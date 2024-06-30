
import "../styles/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createClient, configureChains, mainnet, WagmiProvider } from "wagmi";
// import { publicProvider } from "wagmi/providers/public";
import {
  RainbowKitProvider,
  getDefaultConfig,
  Button, // Import Rainbow Kit Button component
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { sepolia } from "wagmi/chains";
import { contractConfig } from "../contracts/contractConfig";

import Navbar from "./Navbar";
import Registration from "../pages/Registration";
import TradingInterface from "../pages/TradingInterface";
import Dashboard from "../pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ethers = require("ethers");

const baseSepolia = {
  id: 84532,
  name: "Base Sepolia",
  network: "base-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://sepolia.base.org"] },
    public: { http: ["https://sepolia.base.org"] },
  },
  blockExplorers: {
    default: {
      name: "Base Sepolia Explorer",
      url: "https://sepolia-explorer.base.org",
    },
  },
  testnet: true,
};
const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "CasinoLend",
  projectId: "e2438f5053ef819e9aaf502c378745b3",
  chains: [sepolia, baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function App() {
  
  // const [provider, setProvider] = useState(null);
  // const [signer, setSigner] = useState(null);
  // const [tradeToken, setTradeToken] = useState(null);
  // const [userRegistry, setUserRegistry] = useState(null);
  // const [tradingPlatform, setTradingPlatform] = useState(null);

  // useEffect(() => {
  //   const init = async () => {
  //     if (window.ethereum) {
  //       const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       const tempSigner = tempProvider.getSigner();

  //       const tradeTokenContract = new ethers.Contract(
  //         contractConfig.TradeToken.address,
  //         contractConfig.TradeToken.abi,
  //         tempSigner
  //       );

  //       const userRegistryContract = new ethers.Contract(
  //         contractConfig.UserRegistry.address,
  //         contractConfig.UserRegistry.abi,
  //         tempSigner
  //       );

  //       const tradingPlatformContract = new ethers.Contract(
  //         contractConfig.TradingPlatform.address,
  //         contractConfig.TradingPlatform.abi,
  //         tempSigner
  //       );

  //       setProvider(tempProvider);
  //       setSigner(tempSigner);
  //       setTradeToken(tradeTokenContract);
  //       setUserRegistry(userRegistryContract);
  //       setTradingPlatform(tradingPlatformContract);
  //     } else {
  //       console.error("Metamask not detected");
  //     }
  //   };
  //   init();
  // }, []);

  // const getTokenName = async () => {
  //   if (tradeToken) {
  //     const name = await tradeToken.name();
  //     console.log("Trade Token Name:", name);
  //   }
  // };

  // const registerUser = async () => {
  //   if (userRegistry) {
  //     const tx = await userRegistry.registerUser();
  //     await tx.wait();
  //     console.log("User Registered");
  //   }
  // };

  // const addFundsToPool = async (amount) => {
  //   if (tradingPlatform) {
  //     const tx = await tradingPlatform.addFundsToPool(
  //       ethers.utils.parseEther(amount)
  //     );
  //     await tx.wait();
  //     console.log(`Added ${amount} to the pool`);
  //   }
  // };
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Router>
              <div className="App">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Registration />} />
                  <Route path="/trade" element={<TradingInterface />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </div>
            </Router>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
