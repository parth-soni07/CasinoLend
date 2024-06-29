import "./styles/App.css";
import React from "react";
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

import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import TradingInterface from "./pages/TradingInterface";
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
