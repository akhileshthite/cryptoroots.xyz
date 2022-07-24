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
import ClipLoader from "react-spinners/ClipLoader";

function App({ networkId }) {
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletStatus, setWalletStatus] = useState("");
  const [accountAddress, setAccountAddress] = useState(
    "Please connect your wallet to view your NFT badges."
  );
  const [web3, setWeb3] = useState(undefined);
  const [network, setNetwork] = useState(undefined);
  const [cryptoRootsContract, setCryptoRootsContract] = useState(undefined);

  useEffect(() => {
    (async () => {
      // Define web3
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      // Get network id
      const networkId = await web3.eth.net.getId();
      const network = cryptoRootsJson.networks[networkId];
      console.log(network)
      setNetwork(network);
      // Instantiate smart contract instance i.e. contract(ABI, deployed network contract address)
      const cryptoRootsContract = new web3.eth.Contract(
        cryptoRootsJson.abi,
        network.address
      );
      setCryptoRootsContract(cryptoRootsContract);
      // Set provider
      cryptoRootsContract.setProvider(window.ethereum);
    })();
  }, []);
  console.log(network)

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
    } else {
      setWalletStatus("⚠️ Wallet not found! Please install MetaMask.");
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div id="App">
      {loading ? (
        <div style={style}>
          <ClipLoader color={"#40C45D"} loading={loading} size={69} />
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
