import React from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Registration</Link>
        </li>
        <li>
          <Link to="/trade">Trading Interface</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <ConnectButton />
    </nav>
  );
}

export default Navbar;
