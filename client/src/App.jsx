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
import WalletConnectProvider from "@walletconnect/web3-provider";
import { sequence } from "0xsequence";
import Web3Modal from "web3modal";
import cryptoRootsJson from "./contracts/CryptoRoots.json";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";
require("dotenv").config();

function App() {
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletStatus, setWalletStatus] = useState("");
  const [accountAddress, setAccountAddress] = useState(
    "Please connect your wallet to view your NFT badges."
  );
  const [getWeb3, setGetWeb3] = useState(undefined);
  const [getNetwork, setGetNetwork] = useState(undefined);
  const [getCryptoRootsContract, setGetCryptoRootsContract] =
    useState(undefined);

  useEffect(() => {
    (async () => {
      // Define web3
      const web3 = new Web3(window.ethereum);
      setGetWeb3(web3);
      // Get network id
      const networkId = await web3.eth.getChainId();
      setGetNetwork(networkId);
      const network = cryptoRootsJson.networks[networkId];
      // Instantiate smart contract instance
      const cryptoRootsContract = new web3.eth.Contract(
        cryptoRootsJson.abi,
        network && network.address
      );
      setGetCryptoRootsContract(cryptoRootsContract);
      // Set provider
      cryptoRootsContract.setProvider(window.ethereum);
    })();
  }, []);

  // Connect to wallet
  async function connectWallet() {
    try {
      const web3Modal = new Web3Modal({
        // network: "rinkeby",
        cacheProvider: false,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              network: "mumbai",
              rpc: {
                80001: "https://polygon-mumbai.infura.io/v3/",
              },
              infuraId: process.env.REACT_APP_INFURA_MATIC_TESTNET,
            },
          },
          sequence: {
            package: sequence,
            options: {
              appName: "cryptoroots.xyz",
              defaultNetwork: "mumbai",
            },
          },
        },
      });
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      if (web3) {
        setIsConnected(!isConnected);
        // Get account address
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setAccountAddress(account);
      } else {
        setWalletStatus("⚠️ Wallet not found! Please install MetaMask.");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3690);
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
        <>
          {getWeb3 && getCryptoRootsContract ? (
            <Router>
              <Navbar network={getNetwork} />
              <Routes>
                <Route>
                  <Route
                    path="/"
                    exact
                    element={
                      <DonationCardScreen
                        connectWallet={connectWallet}
                        walletStatus={walletStatus}
                        web3={getWeb3}
                        cryptoRootsContract={getCryptoRootsContract}
                        isConnected={isConnected}
                        accountAddress={accountAddress}
                      />
                    }
                  />
                  <Route
                    path="/receipts"
                    exact
                    element={<DonationReceipts />}
                  />
                  <Route
                    path="/mytreesscreen"
                    exact
                    element={
                      <MyTreesScreen
                        connectWallet={connectWallet}
                        walletStatus={walletStatus}
                        web3={getWeb3}
                        cryptoRootsContract={getCryptoRootsContract}
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
          ) : (
            <div className="text-center w-full rounded-sm shadow-md p-2 bg-gray-200">
              <p className="text-gray-500">
                ⚠️ Web3 is not injected! Please install MetaMask in your
                browser.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
