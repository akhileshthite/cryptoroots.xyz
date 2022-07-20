import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import DonationCardScreen from "./components/DonationCardScreen";
import Content from "./components/Content";
import DonationReceipts from "./components/DonationReceipts";
import MyTreesScreen from "./components/MyTreesScreen";
import Web3 from "web3";
import cryptoRootsJson from "./contracts/CryptoRoots.json";
import "./App.css";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletStatus, setWalletStatus] = useState("");
  const [accountAddress, setAccountAddress] = useState(
    "Please connect your wallet to view your NFT badges."
  );

  // Define web3
  const web3 = new Web3(window.ethereum);
  // Get network id
  const network = cryptoRootsJson.networks[4];
  // Instantiate smart contract instance i.e. contract(ABI, deployed network contract address)
  const cryptoRootsContract = new web3.eth.Contract(
    cryptoRootsJson.abi,
    network.address
  );
  // Set provider
  cryptoRootsContract.setProvider(window.ethereum);

  // Connect to Metamask wallet
  async function connectWallet() {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccountAddress(account[0]);
        setIsConnected(!isConnected);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    else {
      setWalletStatus("⚠️ Wallet not found! Please install MetaMask.");
    }
  }

  // useEffect(() => {
  //   setIsConnected(!isConnected);
  // }, []);

  return (
    <div id="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route
              path="/"
              exact
              element={
                <DonationCardScreen
                  connectWallet={connectWallet}
                  walletStatus={walletStatus}
                  web3={web3}
                  cryptoRootsContract={cryptoRootsContract}
                  isConnected={isConnected}
                  accountAddress={accountAddress}
                />
              }
            />
            <Route path="/receipts" exact element={<DonationReceipts />} />
            <Route
              path="/mytreesscreen"
              exact
              element={
                <MyTreesScreen
                  connectWallet={connectWallet}
                  walletStatus={walletStatus}
                  network={network}
                  web3={web3}
                  cryptoRootsContract={cryptoRootsContract}
                  isConnected={isConnected}
                  accountAddress={accountAddress}
                />
              }
            />
          </Route>
        </Routes>
        <Routes>
          <Route path="/" exact element={<Content />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
